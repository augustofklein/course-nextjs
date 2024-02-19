// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number,
    nome: string,
    email: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const id = req.query.id ? +req.query.id : 0
    res.status(200).json({
        id,
        nome: `João Almeida ${id}`,
        email: `jjjalalammm${id}@gmail.com`
    })
}
