import bcrypt from "bcrypt";
import { db } from "../database/connection.js";

export async function registrar(req, res) {
  try {
    const { nome, email, senha } = req.body;

    // ----- VALIDAÇÃO DO NOME: mínimo 3 letras e sem números -----
    if (!nome || nome.length < 3 || !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
      return res.status(400).json({
        error: "O nome deve ter pelo menos 3 letras e não pode conter números."
      });
    }

    // ----- VALIDAÇÃO DO EMAIL: terminar com @gmail.com e ter pelo menos 2 caracteres antes -----
    const emailRegex = /^[A-Za-z0-9._%+-]{2,}@gmail\.com$/;

    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        error: "O email deve ser válido e terminar com @gmail.com (mínimo 2 caracteres antes)."
      });
    }

    // ----- VALIDAÇÃO DA SENHA: mínimo 4 caracteres -----
    if (!senha || senha.length < 4) {
      return res.status(400).json({
        error: "A senha deve ter pelo menos 4 caracteres."
      });
    }

    // ----- CRIPTOGRAFIA -----
    const hashedPassword = await bcrypt.hash(senha, 10);

    const sql = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
    await db.execute(sql, [nome, email, hashedPassword]);

    return res.status(201).json({ message: "Usuário registrado com sucesso!" });

  } catch (err) {
    console.error("❌ ERRO NO REGISTRO:", err);
    return res.status(500).json({ error: "Erro ao registrar." });
  }
}

export async function login(req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: "Email e senha são obrigatórios." });
    }

    const [rows] = await db.execute(`SELECT * FROM usuarios WHERE email = ?`, [email]);

    if (rows.length === 0) {
      return res.status(400).json({ error: "Usuário não encontrado." });
    }

    const usuario = rows[0];
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(400).json({ error: "Senha incorreta." });
    }

    return res.status(200).json({ message: "Login realizado!", usuario });
  } catch (err) {
    console.error("🔥 ERRO NO LOGIN:", err);
    return res.status(500).json({ error: "Erro ao fazer login." });
  }
}
