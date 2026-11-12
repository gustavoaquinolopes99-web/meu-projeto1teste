import { buscarRepositorios } from "@/lib/githubApi";

export async function listarRepositorios() {
  const res = await buscarRepositorios();

  if (!res.ok) {
    throw new Error("Não foi possível carregar os repositórios.");
  }

  return res.json();
}