import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'
import QuestaoModel from '@/model/questao'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (typeof req.query.id !== 'undefined') {
        const id = +req.query.id

        const questao = questoes.filter(questao => questao.id === id)

        if(questao.length === 1) {
            const questaoSelecionada = questao[0]
            res.status(200).json(questaoSelecionada.paraObjeto())
        } else {
            res.status(204).send('')
        }
    }
}