import Titulo from "../../components/Titulo"

export default function usandoTitulo(){
    return(
        <div>
            <Titulo
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir cadastro"
            />
            <Titulo
                principal="Página de login"
                secundario="Informe o seu e-mail e senha"
                pequeno={false}
            />
        </div>
    )
}