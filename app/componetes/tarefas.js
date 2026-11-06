"use client";
import { useState } from "react";
import { criarTarefa, apagarTarefa } from "@/lib/tarefa"; 

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  async function adicionar(e) {
    e.preventDefault();
    if (!texto.trim()) return;

    try {
      const id = await criarTarefa(texto);        
      setTarefas([...tarefas, { id, texto }]);    
      setTexto("");                               
    } catch (erro) {
      console.error("erro ao salvar:", erro);
    }
  }

  async function remover(id) {                    
    try {
      await apagarTarefa(id);                     
      setTarefas(tarefas.filter((t) => t.id !== id)); 
    } catch (erro) {
      console.error("erro ao remover:", erro);
    }
  }

  return (
    <div>
      <form onSubmit={adicionar}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            {t.texto}
            <button onClick={() => remover(t.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}