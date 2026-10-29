import { cacheLife } from "next/cache";

export default async function GitHub() {
  "use cache";
  cacheLife("hours");

  const res = await fetch("https://api.github.com/users/mvmendoncas/repos");

  if (!res.ok) return <p>Não foi possível carregar os repositórios.</p>;

  const repos = await res.json();

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