import { useState, useEffect } from 'react';
import { useBasketState } from '@/hooks/useBasket';
import Spinner from '@/components/Spinner'
import { priceFormat } from '@/lib/helpers';

const OrderSummary = () => {
    const basketState = useBasketState();
    const [basketTotal, setBasketTotal] = useState(0)
    const [basketSubTotal, setBasketSubTotal] = useState(0)

    useEffect(() => {
        const basketSubTotal = basketState.basket.reduce((acc, product) => {
            return acc + (product.price * product.quantity)
        }, 0)

        setBasketSubTotal(basketSubTotal);

        return () => {
            setBasketSubTotal(0);
        }
    }, [basketState.basket])

    useEffect(() => {
        const basketTotal = basketSubTotal + basketState.shipping // shipping cost
        setBasketTotal(basketTotal);

        return () => {
            setBasketTotal(0);
        }
    }, [basketSubTotal, basketState.shipping])

    return (
        <section
            aria-labelledby="summary-heading"
            className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Order summary
            </h2>

            <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                        {priceFormat(basketSubTotal)}
                    </dd>
                </div>
                <div v-if="shipping" className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Delivery</dt>
                    <dd className="text-sm font-medium text-gray-900">
                        {priceFormat(basketState.shipping)}
                    </dd>
                </div>
                <div
                    className="flex items-center justify-between pt-4 border-t border-gray-200"
                >
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">
                        {priceFormat(basketTotal)}
                    </dd>
                </div>
            </dl>

            <div className="mt-6">
                {/* <NuxtLink
                v-if="isBasket"
                :to="`${!user ? '/account/login' : '/checkout'}`"
                className="block w-full px-4 py-3 text-base font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                <template v-if="!user">Please Login to Continue</template>
                <template v-else>Continue to Checkout</template>
            </NuxtLink> */}
                <button
                    v-if="isCheckout"
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                    {/* <Spinner /> */}
                    Continue to Payment
                </button>
            </div>
        </section>
    )
}

export default OrderSummary;