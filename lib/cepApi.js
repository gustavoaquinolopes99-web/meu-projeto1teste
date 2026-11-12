export async function consultarViaCep(cep) {
  const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  return res;
}