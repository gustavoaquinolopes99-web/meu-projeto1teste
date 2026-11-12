import { cacheLife } from "next/cache";
import { listarRepositorios } from "@/services/github";

export default async function GitHub() {
  "use cache";
  cacheLife("hours");

  let repos;

  try {
    repos = await listarRepositorios();
  } catch (erro) {
    return <p>{erro.message}</p>;
  }

  return (
    <ul>
      {repos.map((r) => (
        <li key={r.id}>
          <a href={r.html_url}>{r.name}</a>
        </li>
      ))}
    </ul>
  );
}