import { ProductWithCategories } from "@/types/Products"
import Image from "next/image"
import Link from "next/link"

type Props = {
    product: ProductWithCategories
    variants: ProductWithCategories[] | undefined
}

const ProductVariants = ({ product, variants }: Props) => {
    return (
        <div className="flex mt-2 gap-x-4">
            <div className="flex flex-col items-center gap-y-3">
                <div className="w-28 h-28">
                    <Image className="rounded-md" src={product.img} width={120} height={120} alt={product.name} />
                </div>

                <div className="w-4 h-4 bg-gray-900 rounded-full" />
            </div>

            {variants?.map((variant) => (
                <div className="flex flex-col items-center gap-y-3 group" key={variant.id}>
                    <Link href={`/products/${variant.slug}`} className="w-28 h-28">
                        <Image className="rounded-md" src={variant.img} width={120} height={120} alt={variant.name} />
                    </Link>
                    <div
                        className="w-4 h-4 transition-all duration-200 ease-in-out border border-gray-900 rounded-full group-hover:bg-gray-200 group-hover:border-gray-200"
                    />
                </div >
            ))}
        </div >
    )
}

export default ProductVariants