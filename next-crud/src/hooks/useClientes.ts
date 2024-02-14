import { useEffect, useState } from 'react'
import ColecaoCliente from '@/firebase/db/ColecaoCliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import Cliente from '../core/Cliente'
import useTabelaOuForm from './useTabelaOuForm'

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(() => obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    function clienteExcluido(cliente: Cliente) {
        console.log(`Exluir ${cliente.nome}`)
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio)
        exibirFormulario()
    }

    return{
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }

}