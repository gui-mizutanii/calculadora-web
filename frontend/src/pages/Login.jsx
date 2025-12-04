import { useState } from "react";
import { loginUsuario } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await loginUsuario({ email, senha });

    if (res.usuario) {
      localStorage.setItem("usuario", JSON.stringify(res.usuario));
      navigate("/home");
    } else {
      setMensagem(res.error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Acessar Conta</h1>

        <form onSubmit={handleLogin} className="login-form">
          <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit" className="btn">Entrar</button>
        </form>

        {mensagem && <p className="error">{mensagem}</p>}

        <p className="register-text">
          Não tem conta?  
          <span onClick={() => navigate("/registrar")} className="register-link">
            Registrar
          </span>
        </p>
      </div>
    </div>
  );
}
