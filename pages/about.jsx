import Head from 'next/head'
import Link from 'next/link';

export default function about() {
  return (
    <>
      <Head>
        <title>About - Rajvir Singh</title>
      </Head>
      <main className="overflow-hidden scroll-none AboutHero px-10 xl:px-24 sm:py-10 text-2xl h-screen lg:h-5/6">
        <div className="flex w-full h-full">
          <div className="flex flex-col w-full lg:w-1/2 h-full pt-32">
            <h1 className="text-activeBlue font-bold text-8xl">About</h1>
            <h3 className="my-3 uppercase text-white font-medium text-2xl tracking-widest">who i am ?</h3>
            <p className="w-full lg:w-3/4 text-2xl leading-8">
              Myself is Rajvir Singh. I am currently a developer, a freelancer, and a writer. Yeah, I also want to become a material scientist. I don&apos;t know what to say here but yeah just check out some of my work on <a target="_blank" rel="noreferrer" href="https://github.com/RajvirSingh1313?tab=repositories">github</a> or my <Link className="link" href="/blogs">blogs</Link>.
            </p>
            <span className="font-medium text-base">
              Will Update this soon...
            </span>
          </div>
          <div className="hidden lg:flex w-1/2 justify-center">
            <img
              className='scale-125'
              src="/Me.svg"
              alt="My Picture"
            />
          </div>
        </div>
      </main>
    </>
  )
}
