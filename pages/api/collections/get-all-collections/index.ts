import { Prisma, PrismaClient } from '@prisma/client'
import { VercelRequest, VercelResponse } from '@vercel/node'
const prisma = new PrismaClient()

const getAllCollections = async (
    request: VercelRequest,
    response: VercelResponse
) => {
    const query = request.query.slug as string | Prisma.StringFilter | undefined
    const collections = (await prisma.category.findMany()).sort((a, b) =>
        a.name.localeCompare(b.name)
    )

    if (collections) {
        response.status(200).json(collections)
    } else {
        response.status(404).json({})
    }
}

export default getAllCollections
