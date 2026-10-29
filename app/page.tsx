import GitHub from "./componetes/Github";
import Link from "next/link";
import Image from "next/image";
import Cartao from "./componetes/cartao";
import Rodape from "./componetes/rodape";
import { projetos } from "./componetes/dados";
import Secao from "./componetes/secao";
import Curtir from "./componetes/curtir";
import Esconder from "./componetes/esconder";
import Contato from "./componetes/contato";
import Tarefas from "./componetes/tarefas";
import { Suspense } from "react";

export default function Home() {
  const nome = "Gustavo";
  return (
    <div>
      <main className="container">
        <section className="topo">
          <Image
            src="/meu.gif"
            width={300}
            height={300}
            alt="minha foto"
            unoptimized
            className="gif-topo"
          />
          <h1>Meu nome é: {nome}</h1>
          <h2>Quer saber mais sobre mim? clique embaixo</h2>
          <Esconder />
        </section>

        <section className="bloco">
          <Cartao
            titulo="Gustavo"
            descricao="Me chamo Gustavo Aquino tenho 18 anos"
            tecnologia="Estou estudando progamação"
          />
        </section>

        <section className="bloco lista-projetos">
          {projetos.map((p) => (
            <Cartao
              key={p.id}
              titulo={p.titulo}
              descricao={p.descricao}
              tecnologia={p.tecnologia}
            />
          ))}
        </section>

        <section className="bloco">
          <Secao titulo="Gustavo">
            <p>:0</p>
          </Secao>
        </section>

        <section className="bloco">
          <Curtir />
        </section>

        <section className="bloco">
          <Contato />
        </section>

        <section className="bloco">
          <Tarefas />
        </section>

        <Suspense fallback={<p>Carregando repositórios...</p>}>
          <GitHub />
        </Suspense>

        <nav className="menu">
          <Link href="/">Início</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/contatos">Contatos</Link>
        </nav>
      </main>

      <Rodape />
    </div>
  );
}