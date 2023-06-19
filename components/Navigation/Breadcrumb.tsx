import { ProductWithCategories } from '@/types/Products';
import Link from 'next/link';

type Props = {
    product: ProductWithCategories | null
}

const Breadcrumb = ({ product }: Props) => {
    return (
        <nav aria-label="Breadcrumb" className="px-4 mx-auto sm:px-6 lg:px-8">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="mr-4 text-sm font-medium text-gray-900"
                        >
                            Home
                        </Link>
                        <svg
                            viewBox="0 0 6 20"
                            aria-hidden="true"
                            className="w-auto h-5 text-gray-300"
                        >
                            <path
                                d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <Link
                            href={`/collections/${product?.categories[0].slug}`}
                            className="mr-4 text-sm font-medium text-gray-900"
                        >
                            {product?.categories[0].name}
                        </Link>
                        <svg
                            viewBox="0 0 6 20"
                            aria-hidden="true"
                            className="w-auto h-5 text-gray-300"
                        >
                            <path
                                d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </li>
                <li className="text-sm">
                    <span
                        aria-current="page"
                        className="font-medium text-gray-500 hover:text-gray-600"
                    >{product?.name}
                    </span>
                </li>
            </ol>
        </nav>
    )
};

export default Breadcrumb;