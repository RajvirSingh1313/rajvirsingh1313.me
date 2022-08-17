import IconsRow from '../components/IconsRow'
import Head from "next/head";

export default function Page404() {
    return (
        <>
            <Head>
                <title>404 - Rajvir Singh</title>
            </Head>
            <main className="overflow-hidden scroll-none px-10 xl:px-24 sm:py-10 text-2xl h-5/6 flex xl:flex-row flex-col justify-center items-center">
                <h3 className="text-activeBlue text-8xl xl:text-9xl font-bold leading-smug">Got Lost?</h3>
                <div className="">
                    <h3 className="mb-4 text-5xl lg:text-7xl xl:text-8xl font-medium">It happens with everybody.... <span className="block lg:inline font-light text-base">Try following me maybe I can help you</span></h3>
                    <IconsRow></IconsRow>
                </div>
            </main>
        </>
    )
}
