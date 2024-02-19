/*
Ao fazer o uso da função getStaticProps as propriedades
os valores das propriedades não são alteradas em modo
produção, dessa forma, as mesmas se tornam estáticas.
*/
export function getStaticProps() {
    return {
        /*Após a passagem do tempo os valores são gerados novamente*/
        revalidate: 7, // segundos
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return(
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}