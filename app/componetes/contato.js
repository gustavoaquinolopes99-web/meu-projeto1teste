"use client"
import { useState } from "react";
export default function Contato(){
 const [numero,setNumero] = useState("");
 const [aviso,setAviso]= useState("");
 
 function enviar(e){
   e.preventDefault();
   if (numero.trim().length < 9){
    setAviso("Número incorreto! Digite o número certo.");
    return;
   } 
   setAviso(`Entrarei em contato logo mais com esse número${numero}`);
   setNumero("");
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






