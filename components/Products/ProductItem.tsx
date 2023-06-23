import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/Products";
import { priceFormat } from "@/lib/helpers";

// Types
type ProductItemProps = {
    product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <Link href={`/products/${product.slug}`} className="group">
            <div
                className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7"
            >
                <Image
                    src={product.img}
                    width={500}
                    height={500}
                    alt={product.name}
                    priority
                    className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
                {product.name}
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
                {priceFormat(product.price)}
            </p>
        </Link>
    )
}

export default ProductItem;