
import { collection, addDoc, serverTimestamp, doc, deleteDoc }

from "firebase/firestore";

import { db } from "./firebase";

const colecao = collection(db, "tarefas");

export async function criarTarefa(texto) {
  const docRef = await addDoc(colecao, {   
    texto,
    feita: false,
    criadaEm: serverTimestamp(),
  });

  return docRef.id;                        
}

export async function apagarTarefa(id) {
  await deleteDoc(doc(db, "tarefas", id));
}