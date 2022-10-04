import IconsRow from '../components/IconsRow';
import Head from "next/head";

export default function talk() {
  return (
    <>
      <Head>
        <title>Contact - Rajvir Singh</title>
      </Head>
      <main className="TalkHero px-10 xl:px-24 sm:py-10 text-2xl h-full pb-32">
        <div className="w-full h-full space-y-4 flex flex-col items-center my-36 mb-40">
          <h1 className="text-activeBlue font-bold text-7xl sm:text-8xl">Lets Talk</h1>
          <h3 className="font-bold text-3xl sm:text-4xl"><span className="text-activeBlue">Email :- </span>dev.rajvirsingh1313@gmail.com</h3>
          <IconsRow />
        </div>
      </main>
    </>
  )
}
