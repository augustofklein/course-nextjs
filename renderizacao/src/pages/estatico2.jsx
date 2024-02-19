/*
Ao fazer o uso da função getStaticProps as propriedades
os valores das propriedades não são alteradas em modo
produção, dessa forma, as mesmas se tornam estáticas.
*/
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props) {
    return(
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}