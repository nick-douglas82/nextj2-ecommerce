import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/gotrue-js/dist/module/lib/types";
import AccountNavigation from "@/components/Navigation/AccountNavigation";

const AccountPage = () => {
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
            </div>
        </div>
    )
}

export default AccountPage