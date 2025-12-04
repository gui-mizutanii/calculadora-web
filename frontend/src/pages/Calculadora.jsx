import { useState } from "react";
import { calcular } from "../services/api"; 
import { useNavigate } from "react-router-dom";
import "./Calculadora.css";

export default function Calculadora() {
  const [valor, setValor] = useState("");
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const adicionar = (v) => {
    setValor(valor + v);
  };

  const limpar = () => {
    setValor("");
  };

  const calcularResultado = async () => {
    try {
      const partes = valor.match(/(\d+\.?\d*)([\+\-\*\/])(\d+\.?\d*)/);

      if (!partes) return setValor("Erro");

      const valor1 = parseFloat(partes[1]);
      const operacao = partes[2];
      const valor2 = parseFloat(partes[3]);

      const resultado = await calcular(usuario.id, valor1, valor2, operacao);

      setValor(String(resultado));
    } catch {
      setValor("Erro");
    }
  };

  return (
    <div className="calc-container">
      <div className="calc-card">
        <div className="calc-display">{valor || "0"}</div>

        {/* Botão para acessar Histórico */}
        <button 
          className="btn-historico"
          onClick={() => navigate("/historico")}
        >
          Ver Histórico
        </button>

        {/* 🔙 Botão voltar para Home */}
        <button
          className="btn-voltar"
          onClick={() => navigate("/home")}
        >
          ⬅ Voltar para Home
        </button>

        <div className="calc-grid">
          <button onClick={limpar} className="btn-calc limpar">C</button>
          <button onClick={() => adicionar("/")} className="btn-calc op">÷</button>
          <button onClick={() => adicionar("*")} className="btn-calc op">×</button>
          <button onClick={() => adicionar("-")} className="btn-calc op">−</button>

          <button onClick={() => adicionar("7")} className="btn-calc">7</button>
          <button onClick={() => adicionar("8")} className="btn-calc">8</button>
          <button onClick={() => adicionar("9")} className="btn-calc">9</button>
          <button onClick={() => adicionar("+")} className="btn-calc op">+</button>

          <button onClick={() => adicionar("4")} className="btn-calc">4</button>
          <button onClick={() => adicionar("5")} className="btn-calc">5</button>
          <button onClick={() => adicionar("6")} className="btn-calc">6</button>
          <button onClick={calcularResultado} className="btn-calc igual">=</button>

          <button onClick={() => adicionar("1")} className="btn-calc">1</button>
          <button onClick={() => adicionar("2")} className="btn-calc">2</button>
          <button onClick={() => adicionar("3")} className="btn-calc">3</button>

          <button onClick={() => adicionar("0")} className="btn-calc zero">0</button>
          <button onClick={() => adicionar(".")} className="btn-calc">.</button>
        </div>
      </div>
    </div>
  );
}
