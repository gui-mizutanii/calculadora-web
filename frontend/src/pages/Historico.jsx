import { useEffect, useState } from "react";
import { pegarHistorico } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Historico.css";

export default function Historico() {
  const [historico, setHistorico] = useState([]);
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  useEffect(() => {
    async function carregar() {
      const res = await pegarHistorico(usuario.id);
      setHistorico(res);
    }
    carregar();
  }, []);

  return (
    <div className="hist-container">
      <div className="hist-card">
        <h1>Histórico de Cálculos</h1>

        <button className="btn-voltar" onClick={() => navigate("/calculadora")}>
          Voltar para Calculadora
        </button>

        <ul>
          {historico.length === 0 && <p>Nenhum cálculo registrado ainda...</p>}

          {historico.map((item) => (
            <li key={item.id}>
              {item.valor1} {item.operacao} {item.valor2} = <strong>{item.resultado}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
