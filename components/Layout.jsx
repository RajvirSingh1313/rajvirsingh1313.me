import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import IconsRow from "../components/IconsRow";

export default function Layout({children}) {
    const router = useRouter();
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div id="Layout" className="h-fit sm:h-full bg-gradient-to-bl from-[#091D45] to-[#070332] text-white outline-none">
            <link
                href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;900&display=swap"
                rel="stylesheet"
            />
            <Head>
                <title>Rajvir Singh</title>
                <meta
                    name="description"
                    content="My name is Rajvir Singh, A software developer, freelancer, writer and startup / tech enthusiastic"
                />
                <meta
                    property="og:title"
                    content="Rajvir Singh, A software developer, freelancer, writer and startup / tech enthusiastic"
                />
                <meta property="og:description" content="Available for work" />
                <meta
                    property="og:image"
                    content="/OG Image.png"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta
                    property="twitter:og:title"
                    content="Rajvir Singh, A software developer, freelancer, writer and startup / tech enthusiastic"
                />
                <meta property="twitter:og:description" content="Available for work" />
                <meta
                    property="twitter:og:image"
                    content="/OG Image.png"
                />
                <meta property="twitter:og:image:width" content="1200" />
                <meta property="twitter:og:image:height" content="630" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            {
                mobileMenu &&
                <div className="absolute w-1/2 h-screen shadow-xl backdrop-blur-xl border-r-2 border-activeBlue text-2xl p-10">
                    <div className="flex w-full justify-between items-center mb-10">
                        <Link href="/"><h4 className="hover:cursor-pointer font-black text-activeBlue">Rajvir Singh <span className="text-white">.</span></h4></Link>
                        <AiOutlineClose onClick={() => setMobileMenu(!mobileMenu)} className="w-8 h-8" />
                    </div>
                    <div className="space-y-10 font-medium">
                        <Link href="/"><h4 className={router.pathname === "/" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>Home</h4></Link>
                        <Link href="/work"><h4 className={router.pathname === "/work" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>Work</h4></Link>
                        <Link href="/about"><h4 className={router.pathname === "/about" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>About</h4></Link>
                        <Link href="/blogs"><h4 className={router.pathname === "/blogs" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>Blogs</h4></Link>
                        <Link href="/talk"><h4 className={router.pathname === "/talk" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>Lets Talk</h4></Link>
                        <IconsRow />
                    </div>
                </div>
            }

            <nav className="px-10 xl:px-24 py-10 text-2xl flex w-full justify-between items-center">
                <Link href="/"><h4 className="hover:cursor-pointer font-black text-activeBlue">Rajvir Singh <span className="text-white">.</span></h4></Link>
                <div className="hidden lg:flex space-x-10 hover:cursor-pointer font-medium">
                    <Link href="/"><h4 className={router.pathname === "/" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>Home</h4></Link>
                    <Link href="/work"><h4 className={router.pathname === "/work" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>Work</h4></Link>
                    <Link href="/about"><h4 className={router.pathname === "/about" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>About</h4></Link>
                    <Link href="/blogs"><h4 className={router.pathname === "/blogs" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>Blogs</h4></Link>
                    <Link href="/talk"><h4 className={router.pathname === "/talk" ? "text-activeBlue underline" : "hover:text-activeBlue hover:underline"}>Lets Talk</h4></Link>
                    <IconsRow />
                </div>
                <AiOutlineMenu onClick={() => setMobileMenu(!mobileMenu)} className="flex lg:hidden w-8 h-8" />
            </nav>

            {children}
        </div>)
}
