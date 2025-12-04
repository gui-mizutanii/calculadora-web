import express from "express";
import { registrar, login } from "../controllers/userController.js";
import { calcular, historico } from "../controllers/calcController.js";

const router = express.Router();

router.post("/registrar", registrar);
router.post("/login", login);
router.post("/calcular", calcular);
router.get("/historico", historico);
router.get("/historico/:usuario_id", historico);

export default router;
