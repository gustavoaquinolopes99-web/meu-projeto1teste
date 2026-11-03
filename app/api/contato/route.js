export async function POST(request) {
    const dados = await request.json();
    if (!dados.numero) {
        return Response.json (
            {erro: "Nome é obrigatório"},
            {status:400}
        );
    }

console.log(dados);
    return Response.json(
        {ok:true},{status:201 });



}
