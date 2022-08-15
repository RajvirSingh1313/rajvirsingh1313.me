import Link from "next/link"

export default function work() {
  return (
    <main className="WorkHero px-10 xl:px-24 sm:py-10 text-2xl h-5/6">
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full lg:w-1/2 h-full pt-32">
          <h1 className="text-activeBlue font-bold text-8xl">Work</h1>
          <h3 className="my-3 uppercase text-white font-medium text-2xl tracking-widest">What I can do for you ?</h3>
          <p className="w-full lg:w-3/4 text-2xl leading-8">
            I am a self taught programmer, my learning ability is quick to practical things. I have worked over 50+ clients past 3+ years from things like embedded programming, IOT, full commerical desktop application to full stack applications. I am quick to adapt any programming language as every programming language uses same basic principals with few variations. <span className="font-medium">I am currently available for work, Contact me on my email :-</span> <span className="font-medium text-activeBlue">dev.rajvirsingh1313@gmail.com</span>
          </p>
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
  )
}
