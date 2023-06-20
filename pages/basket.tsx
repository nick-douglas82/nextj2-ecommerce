import BasketList from "@/components/Basket/BasketList";
import OrderSummary from "@/components/Basket/OrderSummary";
import MainLayout from "@/components/Layouts/MainLayout";
import { NextPage } from "next";

const Basket: NextPage = () => {
    return (
        <MainLayout>
            <div className="bg-white">
                <div
                    className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    <h1
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Shopping Basket
                    </h1>
                    <div
                        className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
                    >
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>
                            <BasketList />
                        </section>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Basket;