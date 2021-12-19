import Head from 'next/head'
import Navbar from './components/Navbar';
import { SiFiverr } from "react-icons/si";
import { FaGithub, FaDev } from "react-icons/fa";


export default function contact() {
    return (
        <div className="font-body text-white w-full h-full" >
            <Head>
                <title>Rajvir Singh</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <div className="flex w-full h-full pt-52 justify-center items-center flex-col space-y-5">
                <h1 className="md:text-8xl text-6xl text-blue font-bold">Lets Talk</h1>
                <h1 className="md:text-4xl text-2xl text-blue font-bold">Email : <span className="text-white">rajvirsinghdeol1313@gmail.com</span></h1>

                <div className="flex flex-row space-x-6 items-center">
                    <a target="_blank" rel="noreferrer" id="GithubIcon" href="https://github.com/RajvirSingh1313"><FaGithub className="text-blue hover:text-white  text-5xl" /></a>
                    <a target="_blank" rel="noreferrer" id="DevIcon" href="https://dev.to/rajvirsingh1313"><FaDev className="text-blue hover:text-white  text-5xl" /></a>
                    <a target="_blank" rel="noreferrer" id="FiverrIcon" href="https://www.fiverr.com/rajvirsingh1313"><SiFiverr className="text-white text-5xl bg-blue hover:bg-white hover:text-blue rounded-full p-1" /></a>
                </div>
            </div>

            <img className="absolute bottom-0 md:w-2/3 md:h-3/5 h-1/2 w-full" style={{ zIndex: -1 }} src="/ContactHeroPattern.png" alt="" />
        </div>
    )
}
