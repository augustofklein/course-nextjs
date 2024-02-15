import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number,
    name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    if (typeof req.query.id !== 'undefined') {
        const id = +req.query.id

        res.status(200).json({
            id: id,
            name: 'John Doe'
        })
    }
}
