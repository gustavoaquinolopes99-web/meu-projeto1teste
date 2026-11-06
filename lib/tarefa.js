import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
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

export function ouvirTarefas(aoMudar) {
  const q = query(colecao, orderBy("criadaEm"));

  return onSnapshot(q, (resultado) => {
    const lista = resultado.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
    aoMudar(lista);
  });
}