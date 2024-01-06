/*
    Com base na descrição do arquivo [[...dadod]]:
    - [[]]: uso de duplo colchetes pode-se determinar o acesso
            a URl sem valores;
    - [[...]]: uso dos três pontos da a possibilidade da URL aceitar
               diversos parâmetros de entrada. Ex: .../a/b/c/d/e
*/

export default function params(req, res) {
    res.status(200).json({
        params: req.query
    })
}