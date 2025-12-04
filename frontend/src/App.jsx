import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";
import Historico from "./pages/Historico";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/calculadora" element={<Calculadora />} />

      </Routes>
    </BrowserRouter>
  );
}
