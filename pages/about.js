import Head from 'next/head'
import Navbar from './components/Navbar';

export default function about() {
    return (
        <div className="font-body text-white" >
            <Head>
                <title>Rajvir Singh</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="px-7 py-2 md:pl-48 md:py-40 w-full md:w-1/2">
                    <h1 className="md:text-8xl text-6xl text-blue font-bold">About</h1>
                    <h3 className="px-2 my-5 uppercase text-xl">who am I ?</h3>
                    <p className="pl-2 my-5 text-2xl w-full">
                        My name is Rajvir Singh, And I am from Punjab, India. I am currently a developer, a freelancer, a blogger. yeah I also want to become a material scientist but sure, I will be. I don’t know what to say here but yeah just check out some of <a className="italic text-blue hover:underline font-medium" href="https://github.com/RajvirSingh1313/" target="_blank">my work on github</a>.
                    </p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img className="w-8/12" src="/MeArt.png" />
                </div>
            </div>
            <img className="absolute bottom-0 md:w-2/3 md:h-3/5 h-1/2 w-full" style={{ zIndex: -1 }} src="/AboutHeroPattern.png" alt="" />
        </div>
    )
}
