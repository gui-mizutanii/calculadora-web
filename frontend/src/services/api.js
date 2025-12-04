import axios from "axios";

const API_URL = "http://localhost:3001"; // backend

// ===========================
// LOGIN
// ===========================
export async function loginUsuario({ email, senha }) {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, senha });
    return res.data; // terá { message, usuario }
  } catch (err) {
    return { error: "Erro ao fazer login" };
  }
}

// ===========================
// REGISTRAR
// ===========================
export async function registrarUsuario({ nome, email, senha }) {
  try {
    const res = await axios.post(`${API_URL}/registrar`, { nome, email, senha });
    return res.data; // terá { message }
  } catch (err) {
    return { error: "Erro ao registrar usuário" };
  }
}

// ===========================
// CALCULAR
// ===========================
export async function calcular(usuario_id, valor1, valor2, operacao) {
  try {
    const res = await axios.post(`${API_URL}/calcular`, {
      usuario_id,
      valor1,
      valor2,
      operacao,
    });
    return res.data.resultado;
  } catch (err) {
    return { error: "Erro ao calcular" };
  }
}

// ===========================
// PEGAR HISTÓRICO
// ===========================
export async function pegarHistorico(usuario_id) {
  try {
    const res = await axios.get(`${API_URL}/historico/${usuario_id}`);
    return res.data;
  } catch (err) {
    return { error: "Erro ao pegar histórico" };
  }
}
