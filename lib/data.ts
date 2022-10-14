import { PrismaClient } from "@prisma/client"

export const getTweets = async (client: PrismaClient) => {
    return await client.tweet.findMany({
        where: {},
        orderBy: [
            {
                id: 'desc'
            }
        ]
    })
} 