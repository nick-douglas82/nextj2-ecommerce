import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { apiFetch } from '../../lib/api/api';
import { useRouter } from 'next/router';

type ServerSideResponse = {}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async ({ req, query }) => {
    let collection: [];

    if (!query.collectionid) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const collectionId = query.collectionid;

    try {
        collection = await apiFetch(`/api/collections/get-collection-by-slug/${collectionId}`);
        console.log(collection);
    } catch (error) {
        collection = [];
    }

    return {
        props: {
            collection
        }
    }
}

export default function Collection() {

    return (
        <main>
            <div className="bg-white">
                <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {/* {{ collection?.name }} */}
                    </h1>
                    <p className="max-w-xl mt-4 text-sm text-gray-700">
                        {/* {{ collection?.description }} */}
                    </p>
                </div>
            </div>

            <section
                aria-labelledby="products-heading"
                className="px-4 pb-16 mx-auto sm:px-6 sm:pb-24 lg:px-8"
            >
                <h2 id="products-heading" className="sr-only">Products</h2>

                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                >
                    {/* <ProductItem
                    v-for="product in collection.products"
                    :product="product"
                    :key="product.id"
                /> */}
                </div>
            </section>
        </main>
    )
}