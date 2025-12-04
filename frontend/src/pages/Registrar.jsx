import { useState } from "react";
import { registrarUsuario } from "../services/api";
import { validarRegistro } from "../utils/validacoes";
import { useNavigate } from "react-router-dom";
import "./Registrar.css";

export default function Registra() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const navigate = useNavigate();

  const handleRegistrar = async (e) => {
    e.preventDefault();

    const msgErro = validarRegistro(nome, email, senha);
    if (msgErro) {
      setErro(msgErro);
      setSucesso("");
      return;
    }

    try {
      await registrarUsuario({ nome, email, senha });
      setErro("");
      setSucesso("Conta criada com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error) {
      setErro("Erro ao registrar. Tente novamente.");
      setSucesso("");
    }
  };

  return (
    <div className="reg-container">
      <div className="reg-card">
        <h2 className="reg-title">Criar Conta</h2>

        <form onSubmit={handleRegistrar} className="reg-form">
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
          <div className="dica-container">
            <small className="dica">
              O email deve terminar com <b>@gmail.com</b> e ter ao menos 2 caracteres antes.
            </small>
          </div>

          <label>Senha:</label>
          <input
            type="password"
            placeholder="Mínimo 4 caracteres"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {erro && <p className="erro">{erro}</p>}
          {sucesso && <p className="sucesso">{sucesso}</p>}

          <button type="submit" className="btn">Registrar</button>
        </form>

        <p className="login-text">
          Já tem conta?
          <span onClick={() => navigate("/")} className="login-link"> Entrar</span>
        </p>
      </div>
    </div>
  );
}
