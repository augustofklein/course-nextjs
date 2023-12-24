export default function SomaUm(props){
    // Informações passadas por parâmetros de componentes
    // não podem ser modificadas.
    //props.numero++

    return(
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}