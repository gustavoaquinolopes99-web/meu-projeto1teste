"use client";
import { useState, useEffect } from "react";
import { criarTarefa, apagarTarefa, ouvirTarefas } from "@/services/tarefa";

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    return ouvirTarefas(setTarefas);
  }, []);

  async function adicionar(e) {
    e.preventDefault();
    if (!texto.trim()) return;
   

    try {
      await criarTarefa(texto);
      setTexto("");
    } catch (erro) {
      console.error("erro ao salvar:", erro);
      alert(erro.message);
    }
  }

  async function remover(id) {
    try {
      await apagarTarefa(id);
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