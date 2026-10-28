export default function Rodape() {
  const ano = new Date().getFullYear();
  return (
    <footer>
      <h1>Esse é meu rodapé.</h1>
      <p>Ano: {ano}</p>
    </footer>
  );
}
