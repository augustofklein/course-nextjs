import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'
import QuestaoModel from '@/model/questao'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if (typeof req.query.id !== 'undefined') {
        const id = +req.query.id

        res.status(200).json(questoes[0].paraObjeto())
    }
}