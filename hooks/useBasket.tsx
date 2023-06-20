import { ProductWithCategories } from "@/types/Products";
import React, { createContext, useContext, useReducer } from "react";

type BasketAction =
    | { type: 'ADD_TO_BASKET', product: ProductWithCategories }
    | { type: 'REMOVE_FROM_BASKET', product: ProductWithCategories }

type BasketState = {
    basket: Array<ProductWithCategories>
    shipping: number
}

type BasketDispatch = (action: BasketAction) => void

const BasketStateContext = createContext<BasketState | undefined>(undefined);
const BasketDispatchContext = createContext<BasketDispatch | undefined>(undefined);

// Reducer
const basketReducer = (state: BasketState, action: BasketAction): BasketState => {
    switch (action.type) {
        case 'ADD_TO_BASKET': {
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
        case 'REMOVE_FROM_BASKET': {
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
        default:
            throw new Error('Unhandled action type')
    }
}

// Provider
const BasketProvider: React.FC<{ initialState: BasketState, children: React.ReactNode }> = ({ children, initialState }) => {
    const [state, dispatch] = useReducer(basketReducer, initialState);

    return (
        <BasketStateContext.Provider value={state}>
            <BasketDispatchContext.Provider value={dispatch}>
                {children}
            </BasketDispatchContext.Provider>
        </BasketStateContext.Provider>
    )
}

// Hooks
const useBasketState = () => {
    const state = useContext(BasketStateContext)

    if (typeof state === 'undefined') {
        throw new Error('useBasketState must be used within a BasketStateContext');
    }

    return state;
}

const useBasketDispatch = () => {
    const dispatch = useContext(BasketDispatchContext)

    if (typeof dispatch === 'undefined') {
        throw new Error('useBasketDispatch must be used within a BasketDispatchContext');
    }

    return dispatch;
}

export { BasketProvider, useBasketState, useBasketDispatch }