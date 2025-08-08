import express from "express";
import {
  criarCliente,
  listarClientes,
  atualizarCliente,
  deletarCliente,
} from "../controllers/clienteController.js";

const router = express.Router();

router.post("/", criarCliente);
router.get("/", listarClientes);
router.put("/:id", atualizarCliente);
router.delete("/:id", deletarCliente);

export default router;
