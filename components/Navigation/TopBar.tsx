import Link from "next/link";
import { useUserState } from '@/hooks/useUser';


const TopBar = () => {
    const userState = useUserState();

    return (
        <div className="bg-gray-900">
            <div
                className="flex items-center justify-between h-10 px-4 mx-auto sm:px-6 lg:px-8"
            >
                <div
                    className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
                >
                    {userState.auth ?
                        <Link href="/account/orders" className="text-sm font-medium text-white hover:text-gray-100">
                            Account
                        </Link> :
                        <Link href="/account/login" className="text-sm font-medium text-white hover:text-gray-100">
                            Sign in
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default TopBar;