import { Product } from './Products'

export type Collection = {
    id: number
    name: string
    slug: string
    img: string
    products: Array<Product>
    description: string
}
