import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import IconsRow from "../components/IconsRow";

export default function Navbar() {
    const router = useRouter();
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>
            {
                mobileMenu &&
                <div className="absolute w-1/2 h-screen shadow-xl backdrop-blur-xl border-r-2 border-activeBlue text-2xl p-10">
                    <div className="flex w-full justify-between items-center mb-10">
                        <Link href="/"><h4 className="link font-black text-activeBlue">Rajvir Singh <span className="text-white">.</span></h4></Link>
                        <AiOutlineClose onClick={() => setMobileMenu(!mobileMenu)} className="w-8 h-8" />
                    </div>
                    <div className="space-y-10 font-medium">
                        <Link href="/"><h4 className={router.pathname === "/" ? "link text-activeBlue underline" : "link hover:text-activeBlue hover:underline"}>Home</h4></Link>
                        <Link href="/work"><h4 className={router.pathname === "/work" ? "link text-activeBlue underline" : "link hover:text-activeBlue hover:underline"}>Work</h4></Link>
                        <Link href="/about"><h4 className={router.pathname === "/about" ? "link text-activeBlue underline" : "link hover:text-activeBlue hover:underline"}>About</h4></Link>
                        <Link href="/blogs"><h4 className={router.pathname === "/blogs" ? "link text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>Blogs</h4></Link>
                        <Link href="/talk"><h4 className={router.pathname === "/talk" ? "link text-activeBlue underline" : "link hover:text-activeBlue hover:underline"}>Lets Talk</h4></Link>
                        <IconsRow />
                    </div>
                </div>
            }

            <nav className="px-10 xl:px-24 py-10 text-2xl flex w-full justify-between items-center">
                <Link href="/"><h4 className="link font-black text-activeBlue">Rajvir Singh <span className="text-white">.</span></h4></Link>
                <div className="hidden lg:flex space-x-10  font-medium">
                    <Link href="/"><h4 className={router.pathname === "/" ? "link text-activeBlue underline" : "link hover:text-activeBlue hover:underline"}>Home</h4></Link>
                    <Link href="/work"><h4 className={router.pathname === "/work" ? "link text-activeBlue underline" : "link hover:text-activeBlue hover:underline"}>Work</h4></Link>
                    <Link href="/about"><h4 className={router.pathname === "/about" ? "link text-activeBlue underline" : "link hover:text-activeBlue hover:underline"}>About</h4></Link>
                    <Link href="/blogs"><h4 className={router.pathname === "/blogs" ? "link text-activeBlue underline" : "link hover:text-activeBlue hover:underline"}>Blogs</h4></Link>
                    <Link href="/talk"><h4 className={router.pathname === "/talk" ? "link text-activeBlue underline" : "link hover:text-activeBlue hover:underline"}>Lets Talk</h4></Link>
                    <IconsRow />
                </div>
                <AiOutlineMenu onClick={() => setMobileMenu(!mobileMenu)} className="flex lg:hidden w-8 h-8" />
            </nav>
        </>
    )
}
