import supabase from "../supabase/client.js";

export async function criarClienteService(nome, email) {
  const { data, error } = await supabase
    .from("clientes")
    .insert([{ nome, email }]);

  if (error) throw new Error(error.message);
  return data;
}

export async function listarClientesService() {
  const { data, error } = await supabase.from("clientes").select("*");

  if (error) throw new Error(error.message);
  return data;
}

export async function atualizarClienteService(id, nome, email) {
  const { data, error } = await supabase
    .from("clientes")
    .update({ nome, email })
    .eq("id", id);

  if (error) throw new Error(error.message);
  return data;
}

export async function deletarClienteService(id) {
  const { error } = await supabase.from("clientes").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
