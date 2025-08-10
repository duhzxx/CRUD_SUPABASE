import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const app = express();

app.use(cors());
app.use(express.json());


app.post('/clientes', async (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: 'nome e email são obrigatórios' });
  }

  const { data, error } = await supabase
    .from('clientes')
    .insert([{ nome, email }])
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data[0]);
});


app.get('/clientes', async (req, res) => {
  const { data, error } = await supabase
    .from('clientes')
    .select()
    .order('id', { ascending: true });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
});


app.put('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  if (!nome && !email) {
    return res.status(400).json({ error: 'Informe ao menos um campo para atualizar' });
  }

  
  const { data: existing, error: selectError } = await supabase
    .from('clientes')
    .select()
    .eq('id', id);

  if (selectError) {
    return res.status(400).json({ error: selectError.message });
  }

  if (!existing || existing.length === 0) {
    return res.status(404).json({ error: 'Cliente não encontrado' });
  }

  const updateData = {};
  if (nome) updateData.nome = nome;
  if (email) updateData.email = email;

  const { data, error } = await supabase
    .from('clientes')
    .update(updateData)
    .eq('id', id)
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data[0]);
});


app.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('clientes')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(204).send();
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
