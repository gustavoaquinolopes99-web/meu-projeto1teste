"use client";
import { useState } from "react";

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionar(e) {
    e.preventDefault();
    if (!texto.trim()) return;
    setTarefas([...tarefas, { id: Date.now(), texto }]);
    setTexto("");
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
          <li key={t.id}>{t.texto}</li>
        ))}
      </ul>
    </div>
  );
}
