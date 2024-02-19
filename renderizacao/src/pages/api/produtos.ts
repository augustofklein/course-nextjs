// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  nome: string,
  preco: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { id: 1, nome: 'Caneta', preco: 5.60 },
    { id: 2, nome: 'Caderno', preco: 15.60 },
    { id: 3, nome: 'Borracha', preco: 7.30 },
    { id: 4, nome: 'Tesoura', preco: 21.55 },
  ])
}
