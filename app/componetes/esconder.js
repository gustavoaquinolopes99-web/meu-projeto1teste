"use client"
import { useState } from "react";
export default function Esconder(){
const [aberto,setAberto]= useState(false);

return(
<div>
<button onClick={()=>setAberto(!aberto)}>
    {aberto?"Esconder" : "Ver detalhes"}
</button>
{aberto && <p>curioso</p>}
</div>

);
}