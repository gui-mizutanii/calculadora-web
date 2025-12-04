import { useState } from "react";
import { registrar } from "../services/api";
import { validarRegistro } from "../utils/validacoes";
import "./Registra.css";

export default function Registra() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleRegistrar = async (e) => {
    e.preventDefault();

    // Validação
    const msgErro = validarRegistro(nome, email, senha);
    if (msgErro) {
      setErro(msgErro);
      setSucesso("");
      return;
    }

    try {
      await registrar(nome, email, senha);
      setErro("");
      setSucesso("Conta criada com sucesso!");

      // Limpa os campos
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error) {
      setErro("Erro ao registrar. Tente novamente.");
      setSucesso("");
    }
  };

  return (
    <div className="registro-container">
      <h2>Criar Conta</h2>

      <form onSubmit={handleRegistrar} className="registro-form">

        <label>Nome:</label>
        <input
          type="text"
          placeholder="Seu nome (mínimo 3 letras)"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="suaConta@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small className="dica">
          O email deve terminar com <b>@gmail.com</b> e ter ao menos 2 caracteres antes.
        </small>

        <label>Senha:</label>
        <input
          type="password"
          placeholder="Mínimo 4 caracteres"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <p className="erro">{erro}</p>}
        {sucesso && <p className="sucesso">{sucesso}</p>}

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
