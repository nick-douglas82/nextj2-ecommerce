import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getCollectionBySlug = async (event: any) => {
    const collection = await prisma.category.findFirst({
        where: { slug: event?.context?.params?.slug },
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
    return collection
}

export default getCollectionBySlug
