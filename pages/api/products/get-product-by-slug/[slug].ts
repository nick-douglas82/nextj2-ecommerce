import { Prisma, PrismaClient } from '@prisma/client'
import { VercelRequest, VercelResponse } from '@vercel/node'
const prisma = new PrismaClient()

const getProductBySlug = async (
    request: VercelRequest,
    response: VercelResponse
) => {
    const query = request.query.slug as string | Prisma.StringFilter | undefined
    const collection = await prisma.products.findFirst({
        where: { slug: query },
        include: {
            categories: true,
            variants: true,
        },
    })

    if (collection) {
        response.status(200).json(collection)
    } else {
        response.status(404).json({})
    }
}

export default getProductBySlug
