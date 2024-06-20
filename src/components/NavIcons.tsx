"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClinet";
import Cookies from "js-cookie";

const NavIcons = () => {

    const wixClient = useWixClient();

    const router = useRouter();

    // for profile dropdown menu
    const [profileOpen, setIsProfileOpen] = useState(false);
    // for cart dropdown menu
    const [cartOpen, setIsCartOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const isLoggedIn = wixClient.auth.loggedIn();

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login")
        } else {

        }
        setIsProfileOpen((prev) => !prev);
    }

    // LOGIN WITH WIX HEADLESS
    /*const login = async () => {
        const loginRequestData = wixClient.auth.generateOAuthData(
            "http://localhost:3000",
            ""
        )

        console.log(loginRequestData)

        // store the user data in local storage
        localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));

        const {authUrl} = await wixClient.auth.getAuthUrl(loginRequestData);

        window.location.href = authUrl;
    }*/

    const handleLogOut = async () => {
        setIsLoading(true);
        Cookies.remove("refreshToken");

        const {logoutUrl} = await wixClient.auth.logout(window.location.href);
        setIsLoading(false);
        setIsProfileOpen(false);
        router.push(logoutUrl);
    }

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src="/profile.png" alt="" width={22} height={22} className="cursor-pointer" 
            onClick={handleProfile}
            //onClick={login} 
            />
            {profileOpen && 
                <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                    <Link href="/">
                        Profile
                    </Link>
                    <div className="mt-2 cursor-pointer" onClick={handleLogOut}>
                        {isLoading ? "Logging Out" : "Logout"}
                    </div>
                </div>
            }
            <Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer" />
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
                <Image src="/cart.png" alt="" width={22} height={22} className="cursor-pointer" />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-stardm rounded-full text-white text-sm flex items-center justify-center">
                    2
                </div>
            </div>
            {cartOpen && (
                <CartModal />
            )}
        </div>
    )
}

export default NavIcons;