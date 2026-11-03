import { projetos } from "@/app/componetes/dados";

export async function GET() {

return Response.json(projetos);

}