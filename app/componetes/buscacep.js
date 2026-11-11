"use client";

import { buscarCep } from "../services/cep";
import { useState } from "react";

export default function Buscacep() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);
    const [aviso, setAviso] = useState("");

    async function buscar(e) {
        e.preventDefault();
        setAviso("");
        setEndereco(null);

        try {
            const dados = await buscarCep(cep);
            setEndereco(dados);
        } catch (erro) {
            setAviso(erro.message);
        }
    }

    return (
        <div>
            {endereco && (
                <p>
                    {endereco.logradouro}, {endereco.bairro} - {endereco.localidade}/{endereco.uf}
                </p>
            )}
            {aviso && (
                <p>
                    {aviso}
                </p>
            )}
            <form onSubmit={buscar}>
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