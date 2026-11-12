import { consultarViaCep } from "@/lib/cepApi";

export async function buscarCep(cep) {
  const res = await consultarViaCep(cep);
  if (!res.ok) throw new Error("CEP inválido");

  const dados = await res.json();
  if (dados.erro) throw new Error("CEP não existe");

  return dados;
}