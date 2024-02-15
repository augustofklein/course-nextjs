export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: any[]
    #acertou: boolean
    //#respondida: boolean

    constructor(id: number, enuncioado: string, respostas: any[], acertou = false ) {
        this.#id = id
        this.#enunciado = enuncioado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }

    get enunciado() {
        return this.#enunciado
    }

    get respostas() {
        return this.#respostas
    }

    get acertou() {
        return this.#acertou
    }

    get respondida() {
        // FIXME: Necessário revisar para realizar a aimplementação
        return false
    }
}