import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import MainLayout from "@/components/Layouts/MainLayout";
import AccountNavigation from "@/components/Navigation/AccountNavigation";

const Orders = () => {
    const [authUser, setAuthUser] = useState<User | null>(null)
    useEffect(() => {
        (async () => {
            const { data: { user } } = await supabase.auth.getUser()

            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })();
    }, [])

    return (
        <MainLayout>
            <div className="bg-white">
                <div
                    className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    <h1
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Hello, {authUser?.user_metadata.name}
                    </h1>
                    <div className="hidden sm:block">
                        <div className="mt-8 border-b border-gray-200">
                            <AccountNavigation />
                        </div>
                    </div>

                    <main className="mt-10">
                        <div className="max-w-xl">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Your Orders
                            </h1>
                            <p className="mt-2 text-sm text-gray-500">
                                Check the status of recent orders, manage returns, and
                                discover similar products.
                            </p>
                        </div>
                        <div className="mt-12 space-y-16 sm:mt-16">
                            {/* <section v-for="order in orders" :key="order.id">
                            <div
                                className="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0"
                            >
                                <h2
                                    :id="`${order.id}-heading`"
                                    className="text-lg font-medium text-gray-900 md:flex-shrink-0"
                                >
                                    Order #{{ order.id }}
                                </h2>
                                <div
                                    className="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1"
                                >
                                    <p className="text-sm font-medium text-gray-500">
                                        Ordered:
                                        {{
                                            dayjs(order.created_at).format(
                                                'D MMMM YYYY'
                                            )
                                        }}
                                    </p>
                                </div>
                            </div>

                            <div
                                className="flow-root mt-6 -mb-6 border-t border-gray-200 divide-y divide-gray-200"
                            >
                                <div
                                    v-for="orderItem in order.orderItems"
                                    :key="orderItem.id"
                                    className="py-6 sm:flex"
                                >
                                    <div
                                        className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8"
                                    >
                                        <img
                                            :src="orderItem.product.img"
                                            :alt="orderItem.product.name"
                                            className="flex-none object-cover object-center w-20 h-20 rounded-md sm:h-48 sm:w-48"
                                        />
                                        <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                                            <h3
                                                className="text-sm font-medium text-gray-900"
                                            >
                                                <NuxtLink
                                                    :to="`/products/${orderItem.product.slug}`"
                                                    >{{
                                                        orderItem.product.name
                                                    }}</NuxtLink
                                                >
                                            </h3>
                                            <p
                                                className="text-sm text-gray-500 truncate"
                                            >
                                                <span className="capitalize">{{
                                                    orderItem.product.variant
                                                }}</span>
                                                {{ ' ' }}
                                                <span
                                                    className="mx-1 text-gray-400"
                                                    aria-hidden="true"
                                                    >&middot;</span
                                                >
                                                {{ ' ' }}
                                                <span className="capitalize"
                                                    >qty
                                                    {{ orderItem.quantity }}</span
                                                >
                                            </p>
                                            <p
                                                className="mt-1 font-medium text-gray-900"
                                            >
                                                {{
                                                    price(
                                                        orderItem.product.price *
                                                            orderItem.quantity
                                                    )
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                        </div>
                    </main>
                </div>
            </div>
        </MainLayout>
    )
}

export default Orders;