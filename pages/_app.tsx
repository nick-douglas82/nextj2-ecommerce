import type { AppProps } from 'next/app'
import { BasketProvider } from '@/hooks/useBasket'
import '@/styles/globals.css'

const EcommerceApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <BasketProvider initialState={{
                ...pageProps,
                basket: [],
                shipping: 0,
            }}>
                <Component {...pageProps} />
            </BasketProvider>
        </>
    )
}

export default EcommerceApp
