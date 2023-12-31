interface Pessoaprops {
    nome: string
    idade?: number // Não obrigatório
}

export default function Pessoa(props: Pessoaprops) {

    return(
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? 'Não informada'}</div>
        </div>
    )

}