import { useBasketState } from '@/hooks/useBasket';
import BasketListItem from '@/components/Basket/BasketListItem'

const BasketList = () => {
    const basketState = useBasketState();

    return (
        <>
            {basketState.basket.length === 0 ? (
                <div className="pt-3 border-t border-gray-200 divide-y divide-gray-200">
                    Your basket is empty
                </div>
            ) : (
                <ul
                    role="list"
                    className="border-t border-b border-gray-200 divide-y divide-gray-200"
                >
                    {basketState.basket.map((product) =>
                        <BasketListItem product={product} key={product.id} />)}
                </ul>
            )}
        </>
    )
}

export default BasketList;