import { supabase } from "@/lib/supabaseClient";
import Link from "next/link"
import { useRouter } from "next/router";
import Router from 'next/router'

const AccountNavigation = () => {
    const { pathname, } = useRouter();

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            console.error(error)
            return
        }
        Router.push('/')
    }
    return (
        <nav className="flex justify-center -mb-px space-x-8" aria-label="Tabs">
            <Link
                href="/account/orders"
                className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${pathname === '/account/orders' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
                Orders
            </Link>
            <button
                className="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent appearance-none hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                onClick={() => logout()}
            >
                Logout
            </button>
        </nav>
    )
}

export default AccountNavigation