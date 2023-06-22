import { BasketState } from '@/hooks/useBasket';
import { ProductWithCategories } from '@/types/Products';

export const addToBasket = (state: BasketState, action: { type: 'ADD_TO_BASKET', product: ProductWithCategories }) => {
    const updatedBasket = [...state.basket]
    const updatedItemIndex = updatedBasket.findIndex(
        item => item.id === action.product.id
    )

    if (updatedItemIndex < 0) {
        updatedBasket.push({ ...action.product, quantity: 1 })
    } else {

        const updatedItem = {
            ...updatedBasket[updatedItemIndex]
        };
        if (updatedItem.quantity !== undefined) {
            updatedItem.quantity++;
            updatedBasket[updatedItemIndex] = updatedItem;
        }
    }
    return { ...state, basket: updatedBasket };
}

export const removeFromBasket = (state: BasketState, action: { type: 'REMOVE_FROM_BASKET', product: ProductWithCategories }) => {
    const updatedBasket = [...state.basket];
    const updatedItemIndex = updatedBasket.findIndex(
        item => item.id === action.product.id
    );
    const updatedItem = {
        ...updatedBasket[updatedItemIndex]
    }
    if (updatedItem.quantity !== undefined) {
        updatedItem.quantity--;
        if (updatedItem.quantity <= 0) {
            updatedBasket.splice(updatedItemIndex, 1);
        } else {
            updatedBasket[updatedItemIndex] = updatedItem;
        }
    }
    return { ...state, basket: updatedBasket };
}

export const updateProductQuantity = (state: BasketState, action: { type: 'UPDATE_PRODUCT_QUANTITY', product: ProductWithCategories, quantity: number }) => {
    const updatedBasket = [...state.basket];
    const updatedItemIndex = updatedBasket.findIndex(
        item => item.id === action.product.id
    );
    const updatedItem = {
        ...updatedBasket[updatedItemIndex]
    }
    if (updatedItem.quantity !== undefined) {
        updatedItem.quantity = action.quantity;
        if (updatedItem.quantity <= 0) {
            updatedBasket.splice(updatedItemIndex, 1);
        } else {
            updatedBasket[updatedItemIndex] = updatedItem;
        }
    }

    return { ...state, basket: updatedBasket };
}