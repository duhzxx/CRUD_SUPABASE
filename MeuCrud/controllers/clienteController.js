import {
  criarClienteService,
  listarClientesService,
  atualizarClienteService,
  deletarClienteService,
} from "../services/clienteService.js";

export async function criarCliente(req, res) {
  try {
    const { nome, email } = req.body;
    const data = await criarClienteService(nome, email);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

export async function listarClientes(req, res) {
  try {
    const data = await listarClientesService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

export async function atualizarCliente(req, res) {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const data = await atualizarClienteService(id, nome, email);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

export async function deletarCliente(req, res) {
  try {
    const { id } = req.params;
    await deletarClienteService(id);
    res.status(200).json({ mensagem: "Cliente deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}
