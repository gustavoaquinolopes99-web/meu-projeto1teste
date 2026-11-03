"use client"
import { useState } from "react";
export default function Contato(){
 const [numero,setNumero] = useState("");
 const [aviso,setAviso]= useState("");
 
 async function enviar(e){
   e.preventDefault();
   if (numero.trim().length < 9){
    setAviso("Número incorreto! Digite o número certo.");
    return;
   } 
  
    const resposta = await fetch("/api/contato",{ 
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({numero}),
    });
   setAviso(`Entrarei em contato logo mais com esse número${numero}`);
   setNumero("");
 if (!resposta.ok){
  setAviso("Erro ao enviar o número. Tente novamente.");
  return;
 }
} 
 return (
    <div>
        <form onSubmit={enviar}>
        <input
        type ="text"
        placeholder="Digite seu número"
        value={numero}
        onChange={(e)=>setNumero(e.target.value)}
        />
        
        <button type ="submit">Enviar</button>
        </form>
        {aviso &&<p>{aviso}</p>}
    </div>
    
 );
}






