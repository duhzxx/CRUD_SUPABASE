import express from "express";
import dotenv from "dotenv";
import clienteRoutes from "./routes/clienteRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.use("/clientes", clienteRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
