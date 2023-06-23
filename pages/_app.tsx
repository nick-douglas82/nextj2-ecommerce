import type { AppProps } from 'next/app'
import { BasketProvider } from '@/hooks/useBasket'
import { UserProvider } from '@/hooks/useUser'
import '@/styles/globals.css'

const EcommerceApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <UserProvider initialState={pageProps.user ?? { auth: false }}>
                <BasketProvider initialState={{
                    ...pageProps,
                    basket: [],
                    shipping: 0,
                }}>
                    <Component {...pageProps} />
                </BasketProvider>
            </UserProvider>
        </>
    )
}

export default EcommerceApp
