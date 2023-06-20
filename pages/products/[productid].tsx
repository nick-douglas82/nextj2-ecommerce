import { useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Image from 'next/image';
import { apiFetch } from '@/lib/api/api';
import { ProductWithCategories } from '@/types/Products';
import { priceFormat } from '@/lib/helpers';
import MainLayout from '@/components/Layouts/MainLayout';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import ProductVariants from '@/components/Products/ProductVariants';
import { useBasketDispatch } from '@/hooks/useBasket';

type ServerSideResponse = {
    product: ProductWithCategories | null
}

const policies = [
    { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
    { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async ({ req, query }) => {
    let product: null;

    if (!query.productid) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const productId = query.productid;

    try {
        product = await apiFetch(`/api/products/get-product-by-slug/${productId}`);
    } catch (error) {
        return {
            redirect: {
                destination: '/error',
                permanent: false,
            },
        };
    }

    return {
        props: {
            product
        }
    }
}

const ProductDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ product }) => {
    const basketDispatch = useBasketDispatch();

    const addToBasket = (product: ProductWithCategories | null) => {
        if (product === null) {
            return;
        }

        basketDispatch({
            type: 'ADD_TO_BASKET',
            product: product
        })
    }

    return (
        <MainLayout>
            <div className="bg-white">
                <div className="pt-6 pb-16 sm:pb-24">
                    <Breadcrumb product={product} />
                    <div className="px-4 mx-auto mt-8 sm:px-6 lg:px-8">
                        <div
                            className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8"
                        >
                            <div className="lg:col-span-5 lg:col-start-8">
                                <div className="flex justify-between">
                                    <h1 className="text-xl font-medium text-gray-900">
                                        {product?.name}
                                    </h1>
                                    <p className="text-xl font-medium text-gray-900">
                                        {product?.price && priceFormat(product?.price)}
                                    </p>
                                </div>
                                <h2
                                    className="mt-8 text-base font-medium text-gray-900 capitalize"
                                >
                                    Colour: {product?.variant}
                                </h2>
                                {/* <ProductVariants
                            :product="product"
                            :variants="product.variants"
                        /> */}
                                {product && <ProductVariants product={product} variants={product.variants} />}
                            </div>

                            <div
                                className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
                            >
                                <h2 className="sr-only">Images</h2>

                                <div className="grid grid-cols-1 lg:gap-8">
                                    {product && <Image
                                        src={product?.img}
                                        width={1000}
                                        height={800}
                                        alt={product?.name}
                                        priority
                                        className="rounded-lg lg:col-span-2 lg:row-span-2"
                                    />}
                                </div>
                            </div>

                            <div className="mt-8 lg:col-span-5">
                                <button
                                    type="button"
                                    className={`flex items-center justify-center w-full px-8 py-3 mt-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                    onClick={() => addToBasket(product)}
                                >
                                    Add to basket
                                </button>

                                <div className="mt-10">
                                    <h2 className="text-sm font-medium text-gray-900">
                                        Description
                                    </h2>

                                    <div
                                        className="mt-4 prose-sm prose text-gray-500"
                                    >{product?.description}</div>
                                </div>
                                <section
                                    aria-labelledby="policies-heading"
                                    className="mt-10"
                                >
                                    <h2 id="policies-heading" className="sr-only">
                                        Our Policies
                                    </h2>

                                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                        {policies.map((policy) => (
                                            <div key={policy.name} className="p-6 text-center border border-gray-200 rounded-lg bg-gray-50">
                                                <dt>
                                                    <policy.icon className="flex-shrink-0 w-6 h-6 mx-auto text-gray-400" aria-hidden="true" />
                                                    <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </section>
                            </div>
                        </div>
                        B</div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ProductDetailPage;