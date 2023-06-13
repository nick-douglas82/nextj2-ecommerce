import { Prisma, PrismaClient } from '@prisma/client'
import { VercelRequest, VercelResponse } from '@vercel/node'
const prisma = new PrismaClient()

const getCollectionBySlug = async (
    request: VercelRequest,
    response: VercelResponse
) => {
    const query = request.query.slug as string | Prisma.StringFilter | undefined
    const collection = await prisma.category.findFirst({
        where: { slug: query },
        include: {
            products: {
                select: {
                    name: true,
                    price: true,
                    slug: true,
                    img: true,
                },
            },
        },
    })

    if (collection) {
        response.status(200).json(collection)
    } else {
        response.status(404).json({})
    }
}

export default getCollectionBySlug
