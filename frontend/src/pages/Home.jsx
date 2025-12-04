import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    navigate("/");
    return null;
  }

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Bem-vindo, {usuario.nome}</h1>

        <button className="btn" onClick={() => navigate("/calculadora")}>
          Ir para Calculadora
        </button>

        <button className="btn" onClick={() => navigate("/historico")}>
          Ver Histórico
        </button>

        <button
          className="btn sair"
          onClick={() => {
            localStorage.removeItem("usuario");
            navigate("/");
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
