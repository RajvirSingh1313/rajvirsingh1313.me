import Head from 'next/head'
import Navbar from './components/Navbar';

export default function work() {
    return (
        <div className="font-body text-white" >
            <Head>
                <title>Rajvir Singh</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="px-7 py-2 md:pl-48 md:py-40 w-full md:w-1/2">
                    <h1 className="md:text-8xl text-6xl text-blue font-bold">Work</h1>
                    <h3 className="px-2 my-5 uppercase text-xl">What I can do for you ?</h3>
                    <p className="pl-2 my-5 text-2xl w-full">
                        I offer many services like creating a full-stack app. You can see my services on <a className="italic text-blue hover:underline font-medium" href="https://fiverr.com/RajvirSingh1313/" target="_blank">Fiverr</a>, If you want something that isn’t on my Fiverr account, then you can email me at <b>rajvirsinghdeol1313@gmail.com</b>
                    </p>
                    <p className="pl-2 my-5 text-2xl w-full">
                        You can see my creations on <a className="italic text-blue hover:underline font-medium" href="https://github.com/RajvirSingh1313/" target="_blank">GitHub</a>
                    </p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img className="w-4/12" src="/SkillCubes.png" />
                </div>
            </div>
            <img className="absolute bottom-0 md:w-2/3 md:h-3/5 h-1/2 w-full" style={{ zIndex: -1 }} src="/WorkHeroPattern.png" alt="" />
        </div>
    )
}
