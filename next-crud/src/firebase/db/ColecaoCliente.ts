import ClienteRepositorio from "@/core/ClienteRepositorio";
import Cliente from '@/core/Cliente'
import firebase from '../config'

export default class ColecaoCliente implements ClienteRepositorio {

    // Para funcionar os métodos do firestore conforme está em código, o firebase precisa
    // estar na versão 8.8.
    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data() as Cliente
        }
    }

    async excluir(cliente: Cliente): Promise<Cliente> {
        await this.colecao().doc(cliente.id).delete()
        return cliente
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data())    
    }

    private colecao() {
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)       
    }

}