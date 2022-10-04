import Head from "next/head";

export default function work() {
  return (
    <>
      <Head>
        <title>Work - Rajvir Singh</title>
      </Head>
      <main className="WorkHero px-10 xl:px-24 sm:py-10 text-2xl h-full pb-32">
        <div className="flex w-full h-full">
          <div className="flex flex-col w-full lg:w-1/2 h-full pt-32">
            <h1 className="text-activeBlue font-bold text-8xl">Work</h1>
            <h3 className="my-3 uppercase text-white font-medium text-2xl tracking-widest">What I can do for you ?</h3>
            <p className="w-full lg:w-3/4 text-2xl leading-8">
              I am a self-taught programmer, working with over 50+ clients past 3+ years performing works in embedded programming, IoT, and commercial desktop application to full-stack applications.I am a quick learner, so I am quick to adapt to any technology stack or programming language. <span className="font-medium">I am currently available for work, Please contact me at email:-</span> <span className="font-medium text-activeBlue">dev.rajvirsingh1313@gmail.com</span>
            </p>
          </div>
          <div className="hidden pt-20 scale-110 lg:flex w-1/2 justify-center">
            <img
              src="/CubesWork.svg"
              alt="My Picture"
            />
          </div>
        </div>
      </main>
    </>
  )
}
