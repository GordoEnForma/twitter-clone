import type { NextApiRequest, NextApiResponse } from 'next'
import client from 'lib/prismadb';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const session = await getSession({ req });

    if (!session) return res.status(401).json({ message: ' Not logged in' })

    const user = await client.user.findUnique({
        where: {
            email: session.user?.email
        },
    })
    if (!user) return res.status(401).json({ message: 'User not found' })

    if (req.method === 'POST') {
        await client.tweet.create({
            data: {
                content: req.body.content,
                author: {
                    connect: { id: user.id }
                }
            }
        })
        res.end();
        return;
    }
}