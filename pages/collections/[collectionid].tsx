import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { apiFetch } from '@/lib/api/api';
import { Collection } from '@/types/Collection';
import ProductItem from '@/components/Products/ProductItem';
import MainLayout from '@/components/Layouts/MainLayout';

type ServerSideResponse = {
    collection: Collection | null
}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async ({ req, query }) => {
    let collection: null;

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
    } catch (error) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            collection
        }
    }
}

const Collection: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ collection }) => {
    return (
        <MainLayout>
            <main>
                <div className="bg-white">
                    <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {collection?.name}
                        </h1>
                        <p className="max-w-xl mt-4 text-sm text-gray-700">
                            {collection?.description}
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
                        {collection?.products.map((product, index) => (
                            <ProductItem product={product} key={`${product.name}_${index}`} />
                        ))}
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default Collection;