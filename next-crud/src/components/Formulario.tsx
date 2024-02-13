import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
}

export default function Fornulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-4"
                />    
            ) : false}
            <Entrada
                texto="Nome"
                valor={nome}
                className="mb-4"
            />
            <Entrada
                texto="Idade"
                tipo="number" 
                valor={idade}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )

}