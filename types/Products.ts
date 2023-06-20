export interface Product {
    description: string
    id: number
    img: string
    name: string
    notes: string | null
    price: number
    slug: string
    variant: string
    variants?: Array<ProductWithCategories>
    createdAt: string
    updatedAt: string
    quantity: number
}

export interface Category {
    id: number
    name: string
    slug: string
    description: string
}

export interface ProductWithCategories extends Product {
    categories: Array<Category>
}
