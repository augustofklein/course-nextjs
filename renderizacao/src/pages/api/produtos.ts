// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  nome: string,
  preco: number
}

function numeroAleatorio(min = 1, max = 100000) {
  return Math.random() * (max - min) + min
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { id: numeroAleatorio(), nome: 'Caneta', preco: 5.60 },
    { id: numeroAleatorio(), nome: 'Caderno', preco: 15.60 },
    { id: numeroAleatorio(), nome: 'Borracha', preco: 7.30 },
    { id: numeroAleatorio(), nome: 'Tesoura', preco: 21.55 },
  ])
}
