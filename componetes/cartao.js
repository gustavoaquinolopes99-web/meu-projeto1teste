export default function Cartao({titulo,descricao,tecnologia}){
  return(
    <div className="cartao">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p>{tecnologia}</p>
      
    </div>
  );
}