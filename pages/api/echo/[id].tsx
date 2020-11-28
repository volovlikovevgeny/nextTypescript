import { NextApiRequest, NextApiResponse } from 'next'

interface MessageNextApiRequest extends NextApiRequest {
    query: {
        message?: string
    }
}

export default function getById(req: MessageNextApiRequest, res: NextApiResponse) {
    res.json({ yourId: req.query.message })
}