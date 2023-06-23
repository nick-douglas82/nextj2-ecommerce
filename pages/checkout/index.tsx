import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import OrderSummary from "@/components/Basket/OrderSummary";
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useBasketDispatch } from '@/hooks/useBasket';
import MainLayout from '@/components/Layouts/MainLayout';

const deliveryMethods = [
    { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '£5.00', value: 500 },
    { id: 2, title: 'Express', turnaround: '2–5 business days', price: '£16.00', value: 1600 },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Checkout = () => {
    const basketDispatch = useBasketDispatch();
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])

    useEffect(() => {
        basketDispatch({
            type: 'UPDATE_SHIPPING',
            shipping: selectedDeliveryMethod.value
        })

    }, [selectedDeliveryMethod, basketDispatch])


    return (
        <MainLayout>
            <div className="bg-white">
                <div
                    className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    <h1
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Checkout
                    </h1>

                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section className="lg:col-span-7">
                            <h2
                                id="contact-info-heading"
                                className="text-lg font-medium text-gray-900"
                            >
                                Contact information
                            </h2>

                            <div className="mt-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full py-2 border border-gray-300 rounded-md shadow-sm appearance-none border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <h2 className="mt-10 text-lg font-medium text-gray-900">
                                Shipping information
                            </h2>

                            <div
                                className="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
                            >
                                <div>
                                    <label
                                        htmlFor="firstname"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            autoComplete="given-name"
                                            required
                                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm appearance-none border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastname"
                                        className="block text-sm font-medium text-gray-700"
                                    >Last name</label
                                    >
                                    <div className="mt-1">
                                        <input
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            autoComplete="family-name"
                                            required
                                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm appearance-none border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="namenumber"
                                        className="block text-sm font-medium text-gray-700"
                                    >House name or number</label
                                    >
                                    <div className="mt-1">
                                        <input
                                            id="namenumber"
                                            name="namenumber"
                                            type="text"
                                            required
                                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm appearance-none border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-gray-700"
                                    >Address</label
                                    >
                                    <div className="mt-1">
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            autoComplete="street-address"
                                            required
                                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm appearance-none border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="city"
                                        className="block text-sm font-medium text-gray-700"
                                    >City</label
                                    >
                                    <div className="mt-1">
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            autoComplete="address-level2"
                                            required
                                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm appearance-none border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="county"
                                        className="block text-sm font-medium text-gray-700"
                                    >County</label
                                    >
                                    <div className="mt-1">
                                        <input
                                            id="county"
                                            name="county"
                                            type="text"
                                            autoComplete="address-level1"
                                            required
                                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm appearance-none border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700"
                                    >Country</label
                                    >
                                    <div className="mt-1">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value="united kingdom">
                                                United Kingdom
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="postcode"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Postal code
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="postcode"
                                            name="postcode"
                                            type="text"
                                            autoComplete="postcode"
                                            required
                                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm appearance-none border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Phone
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            autoComplete="phone"
                                            required
                                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm appearance-none border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10 mt-10 border-t border-gray-200">
                                <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                                    <RadioGroup.Label className="text-lg font-medium text-gray-900">Delivery method</RadioGroup.Label>

                                    <div className="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                        {deliveryMethods.map((deliveryMethod) => (
                                            <RadioGroup.Option
                                                key={deliveryMethod.id}
                                                value={deliveryMethod}
                                                className={({ checked, active }) =>
                                                    classNames(
                                                        checked ? 'border-transparent' : 'border-gray-300',
                                                        active ? 'ring-2 ring-indigo-500' : '',
                                                        'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                                                    )
                                                }
                                            >
                                                {({ checked, active }) => (
                                                    <>
                                                        <span className="flex flex-1">
                                                            <span className="flex flex-col">
                                                                <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                                                    {deliveryMethod.title}
                                                                </RadioGroup.Label>
                                                                <RadioGroup.Description
                                                                    as="span"
                                                                    className="flex items-center mt-1 text-sm text-gray-500"
                                                                >
                                                                    {deliveryMethod.turnaround}
                                                                </RadioGroup.Description>
                                                                <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                                                                    {deliveryMethod.price}
                                                                </RadioGroup.Description>
                                                            </span>
                                                        </span>
                                                        {checked ? <CheckCircleIcon className="w-5 h-5 text-indigo-600" aria-hidden="true" /> : null}
                                                        <span
                                                            className={classNames(
                                                                active ? 'border' : 'border-2',
                                                                checked ? 'border-indigo-500' : 'border-transparent',
                                                                'pointer-events-none absolute -inset-px rounded-lg'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                        </section>
                        <OrderSummary />
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}

export default Checkout;