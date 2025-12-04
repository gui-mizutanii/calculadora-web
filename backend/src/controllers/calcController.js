import { db } from "../database/connection.js";

export async function calcular(req, res) {
  try {
    const { usuario_id, valor1, valor2, operacao } = req.body;

    let resultado;

    switch (operacao) {
      case "+":
        resultado = valor1 + valor2;
        break;
      case "-":
        resultado = valor1 - valor2;
        break;
      case "*":
        resultado = valor1 * valor2;
        break;
      case "/":
        resultado = valor1 / valor2;
        break;
      default:
        return res.status(400).json({ error: "Operação inválida" });
    }

    // Salvar no banco de dados
    const sql = `
      INSERT INTO historico (usuario_id, operacao)
      VALUES (?, ?)
    `;
    const operacaoStr = `${valor1} ${operacao} ${valor2} = ${resultado}`;

    await db.execute(sql, [usuario_id, operacaoStr]);

    return res.json({ resultado });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao calcular" });
  }
}

export async function historico(req, res) {
  try {
    const { usuario_id } = req.params; // vamos passar pelo parâmetro da URL

    const [rows] = await db.execute(
      "SELECT * FROM historico WHERE usuario_id = ? ORDER BY created_at DESC",
      [usuario_id]
    );

    return res.json(rows);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar histórico" });
  }
}
