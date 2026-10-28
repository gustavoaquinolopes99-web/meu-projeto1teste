import Github from "./projetos/gitgub"
import Link from "next/link";
import Image from "next/image";
import Cartao from "./componetes/cartao";
import Rodape from "./componetes/rodape";
import {projetos} from "./componetes/dados"
import Secao from "./componetes/secao"
import Curtir from "./componetes/curtir"
import Esconder from "./componetes/esconder"
import Contato from "./componetes/contato"
import Tarefas from "./componetes/tarefas"
export default function Home() {
  const nome = "Gustavo";
  return (
  <div>
    <Image
      src="/foto.jpg"
      width={300}
      height={300}
      alt="minha foto"
      />
      <h1>Meu nome é: {nome}</h1>
      <h2>Quer saber mais sobre mim? clique embaixo</h2>
      <Esconder/>
      
    
        <Cartao
            titulo="Gustavo"
             descricao="vou me esforçar pra aprender"
             tecnologia="Estou estudando progamação"
         />
         <main>
          {projetos.map((p) =>(
         <Cartao key={p.id}
         titulo={p.titulo}
         descricao={p.descricao}
         tecnologia={p.tecnologia}/>
        ))}
         </main>
         <main>
        <Secao titulo="Gustavo">
          <p>testando seções.</p>
        </Secao>
        <Curtir />
        <Contato></Contato>
        <nav>

<Link href="/">Início</Link>

<Link href="/projetos">Projetos</Link>

<Link href="/contatos">Contatos</Link>
<Github>

</Github>
<Tarefas>

</Tarefas>

</nav>

        <Rodape />


          
         </main>
    </div>
  );
}

