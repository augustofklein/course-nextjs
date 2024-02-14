import Cliente from "./Cliente";

export default interface ClieteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<Cliente>
    obterTodos(): Promise<Cliente[]>
}