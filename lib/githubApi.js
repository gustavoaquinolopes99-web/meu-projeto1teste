export async function buscarRepositorios() {
  const res = await fetch(
    "https://api.github.com/users/gustavoaquinolopes99-web/repos"
  );
  return res;
}