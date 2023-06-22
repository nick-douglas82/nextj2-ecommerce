import Link from "next/link";
import Image from "next/image";
import { ProductWithCategories } from "@/types/Products";
import { priceFormat } from "@/lib/helpers";
import { useBasketDispatch } from '@/hooks/useBasket';
import { useBasketState } from '@/hooks/useBasket';

const BasketListItem = ({ product }: { product: ProductWithCategories }) => {
    const basketState = useBasketState();
    const basketDispatch = useBasketDispatch();

    const removeFromBasket = (product: ProductWithCategories | null) => {
        if (product === null) {
            return;
        }

        basketDispatch({
            type: 'REMOVE_FROM_BASKET',
            product: product
        })
    }

    const updateProductQuantity = (product: ProductWithCategories | null, quantity: string) => {
        if (product === null) {
            return;
        }

        const productQty = parseInt(quantity)

        basketDispatch({
            type: 'UPDATE_PRODUCT_QUANTITY',
            product: product,
            quantity: productQty
        })
    }

    const basketProduct = basketState.basket.find((basketProduct) => basketProduct.id === product.id)

    console.log('basketProduct', basketProduct)
    console.log('product', product)

    return (
        <li className="flex py-6 sm:py-10">
            <div className="flex-shrink-0">
                <Image
                    src={product.img}
                    alt={product.name}
                    width={256}
                    height={256}
                    className="object-cover object-center w-24 h-24 rounded-md sm:h-48 sm:w-48"
                />
            </div>

            <div className="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                <div
                    className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
                >
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-sm">
                                <Link
                                    href="#"
                                    className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                    {product.name}
                                </Link>
                            </h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                            {priceFormat(product.price)}
                        </p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label
                            htmlFor="`quantity-${product.product.id}`"
                            className="sr-only"
                        >
                            Quantity, {product.name}
                        </label>
                        <select
                            value={product.quantity}
                            id="`quantity-${product.product.id}`"
                            name="`quantity-${product.product.id}`"
                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => updateProductQuantity(product, e.target.value)}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>

                        <div className="absolute top-0 right-0">
                            <button
                                type="button"
                                className="inline-flex p-2 -m-2 text-gray-400 hover:text-gray-500"
                                onClick={() => removeFromBasket(product)}
                            >
                                <span className="sr-only">Remove</span>
                                <span className="w-5 h-5 appearance-none">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default BasketListItem;