export default function Secao({titulo,children}){
return(
    <section className="Secao">
        <h2>{titulo}</h2>
        {children}
    </section>
);
}