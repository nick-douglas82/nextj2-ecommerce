import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-white">
            <div className="relative bg-gray-900">
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <Image
                        src="/images/edgar-castrejon-CX8ooha2yLA-unsplash-min.jpg"
                        width={3242}
                        height={2161}
                        alt="Hero image"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gray-900 opacity-50"
                />

                <div
                    className="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0"
                >
                    <h1
                        className="text-4xl font-bold tracking-tight text-white lg:text-6xl"
                    >
                        An e-commerce demo site
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur vel, modi, ducimus ut a accusamus id quis magnam
                        maxime natus earum suscipit obcaecati nisi aperiam. Cumque
                        accusamus quasi molestias incidunt?
                    </p>
                    <Link
                        href="#"
                        className="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100"
                    >Shop New Arrivals
                    </Link>
                </div>
            </div>

            <main>
                <section
                    aria-labelledby="collection-heading"
                    className="max-w-xl px-4 pt-24 mx-auto sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
                >
                    <h2
                        id="collection-heading"
                        className="text-2xl font-bold tracking-tight text-gray-900"
                    >
                        Shop by Collection
                    </h2>
                    <p className="mt-4 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Culpa adipisci provident labore molestiae placeat sunt
                        facere itaque magni quis delectus laboriosam fugiat minus
                        mollitia reprehenderit voluptas unde nam, dicta debitis!
                    </p>

                    <div
                        className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
                    >
                        {/* <NuxtLink
                        v-for="collection in collections"
                        :key="collection.name"
                        :to="`collections/${collection.slug}`"
                        className="block group"
                    >
                        <div
                            aria-hidden="true"
                            className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                        >
                            <img
                                :src="collection.img"
                                :alt="collection.name"
                                className="object-cover object-center w-full h-full"
                            />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-gray-900">
                            {{ collection.name }}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            {{ collection.description }}
                        </p>
                    </NuxtLink> */}
                    </div>
                </section>

                <section
                    aria-labelledby="comfort-heading"
                    className="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8"
                >
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="absolute inset-0">
                            <Image
                                src="/images/sidekix-media--iQYdCr4EpE-unsplash-min.jpg"
                                width={1500}
                                height={1000}
                                alt="Call to action image"
                            />
                        </div>
                        <div
                            className="relative px-6 py-32 bg-gray-900 bg-opacity-75 sm:px-12 sm:py-40 lg:px-16"
                        >
                            <div
                                className="relative flex flex-col items-center max-w-3xl mx-auto text-center"
                            >
                                <h2
                                    id="comfort-heading"
                                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                                >
                                    Some whitty title
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Esse autem inventore harum
                                    similique excepturi, tenetur nesciunt eos alias
                                    tempora non beatae dolore. Maxime nobis minus
                                    earum molestiae impedit, cumque ratione.
                                </p>
                                <Link
                                    href="#"
                                    className="block w-full px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
                                >A none working button
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
