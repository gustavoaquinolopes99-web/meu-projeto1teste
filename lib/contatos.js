
import { collection, addDoc, serverTimestamp }

from "firebase/firestore";

import { db } from "./firebase";

const colecao = collection(db, "contatos");

export async function criarContato(numero) {

await addDoc(colecao, {

numero,

criadaEm: serverTimestamp(),

});

}