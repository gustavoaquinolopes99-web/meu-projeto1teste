"use client";

import { useState } from "react";


export default function Buscacep() {
    async function buscar(e) {
  e.preventDefault();
  setAviso("");
  setEndereco(null);

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!res.ok) throw new Error("CEP inválido");

    const dados = await res.json();
    if (dados.erro) throw new Error("CEP não existe");

    setEndereco(dados);
  } catch (erro) {
    setAviso(erro.message);
  }
}
    const [cep, setCep] = useState("");
        const [endereco, setEndereco] = useState(null); 
        const [aviso, setAviso] = useState("");
    async function buscar(e) {
  e.preventDefault();
  const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const dados = await res.json();
  setEndereco(dados);
}
        return (
        <div>
            {endereco && (
  <p>
    {endereco.logradouro}, {endereco.bairro} - {endereco.localidade}/{endereco.uf}
  </p>
)}
            <form onSubmit = {buscar}>
            <input 
            type="text"
            placeholder="Digite o CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
        />
        <button type="submit">Buscar</button>
            </form>
        </div>
        
    );
}