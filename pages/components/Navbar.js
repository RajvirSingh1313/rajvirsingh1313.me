import { GiHamburgerMenu } from "react-icons/gi";
import { SiFiverr } from "react-icons/si";
import { FaGithub, FaDev } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
    const [isMobileNav, setIsMobileNav] = useState(false);

    return (
        <div>
            {isMobileNav && <div className="absolute backdrop-blur-lg w-screen h-screen flex flex-col items-center justify-center space-y-10">
                <div className="flex w-full items-center">
                    <div className="flex w-full justify-end">
                        <a href="/"><h1 className="text-2xl font-black text-blue">Rajvir Singh <span className="text-white">.</span></h1></a>
                    </div>
                    <div className="flex w-1/2 justify-end">
                        <MdClose onClick={() => setIsMobileNav(false)} className="text-4xl text-white mr-10" />
                    </div>
                </div>
                <a href="/"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">Home</h1></a>
                <a href="/work"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">Work</h1></a>
                <a href="/about"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">About</h1></a>
                <a target="_blank" rel="noreferrer" href="https://dev.to/rajvirsingh1313"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">Blogs</h1></a>
                <a href="/contact"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">Lets Talk</h1></a>
                <div className="flex justify-evenly w-full">
                    <a target="_blank" rel="noreferrer" href="https://github.com/RajvirSingh1313"><FaGithub className="text-blue hover:text-white  text-3xl" /></a>
                    <a target="_blank" rel="noreferrer" href="https://dev.to/rajvirsingh1313"><FaDev className="text-blue hover:text-white  text-3xl" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/rajvirsingh1313"><SiFiverr className="text-white text-4xl bg-blue hover:bg-white hover:text-blue rounded-full p-1" /></a>
                </div>
            </div>}
            <nav className="hidden md:flex w-full justify-between px-28 py-14">
                <a href="/"><h1 className="text-2xl font-black text-blue">Rajvir Singh <span className="text-white">.</span></h1></a>
                <div className="flex w-2/3 justify-evenly  items-center">
                    <a href="/"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">Home</h1></a>
                    <a href="/work"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">Work</h1></a>
                    <a href="/about"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">About</h1></a>
                    <a target="_blank" rel="noreferrer" href="https://dev.to/rajvirsingh1313"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">Blogs</h1></a>
                    <a href="/contact"><h1 className="hover:underline hover:text-blue hover:cursor-pointer text-xl font-medium">Lets Talk</h1></a>
                    <div className="flex flex-row space-x-6 justify-center items-center">
                        <a target="_blank" rel="noreferrer" href="https://github.com/RajvirSingh1313"><FaGithub className="text-blue hover:text-white  text-3xl" /></a>
                        <a target="_blank" rel="noreferrer" href="https://dev.to/rajvirsingh1313"><FaDev className="text-blue hover:text-white  text-3xl" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/rajvirsingh1313"><SiFiverr className="text-white text-4xl bg-blue hover:bg-white hover:text-blue rounded-full p-1" /></a>
                    </div>
                </div>
            </nav>
            <nav className="visible sm:hidden flex items-center justify-between w-full px-14 py-14">
                <h1 className="text-2xl font-black text-blue">Rajvir Singh <span className="text-white">.</span></h1>
                <GiHamburgerMenu onClick={() => setIsMobileNav(true)} className="text-2xl" />
            </nav>
        </div>
    )
}
