/*
    Utilizando a função com especificação getStaticProps
    pode-se utilizar propriedades estáticas internamente
    de uma função.
*/

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return(
        <div>
            <span>Aleatório: {props.numero}</span>
        </div>
    )
}