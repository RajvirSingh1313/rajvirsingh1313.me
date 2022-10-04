import Link from 'next/link';
import IconsRow from "../components/IconsRow";

export default function Home() {
  return (
    <main className="HomeHero px-10 xl:px-24 sm:py-10 text-2xl h-5/6">
      <div className="flex w-full h-full flex-col sm:flex-row">

        <div className="sm:w-1/2 sm:pt-32 flex flex-col lg:pl-10 font-bold">
          <h3 className="text-2xl">Hey There,</h3>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl text-activeBlue mb-4">Rajvir Singh</h1>
          <p className="sm:text-2xl lg:text-3xl font-normal break-words w-3/4 mb-4">Software Developer, Freelancer, Writer, Startup & Tech Enthusiastic</p>
          <IconsRow />
        </div>

        <div className="pt-10 sm:pt-0 sm:w-1/2 flex flex-col items-center justify-center xl:px-10 space-y-6 sm:space-y-14 px-4">
          <Link href="/about">
            <div className="link w-full lg:w-3/4 bg-lightBlue xl:px-16 py-8 xl:py-10 flex justify-between items-center rounded-xl shadow-lg hover:shadow-2xl hover:bg-midBlue/30 border-2 border-lightBlue hover:border-activeBlue ">
              <div className="w-1/2 px-4 xl:px-10 border-r-2 border-white/40 font-bold text-3xl lg:text-4xl xl:text-5xl text-right"><h4>About</h4></div>
              <div className="w-1/2 px-4 xl:px-10 uppercase text-activeBlue font-medium text-base lg:text-lg xl:text-xl text-left"><p>Who I am ?<br /></p></div>
            </div>
          </Link>
          <Link href="/work">
            <div className="link w-full lg:w-3/4 bg-lightBlue xl:px-16 py-8 xl:py-10 flex justify-between items-center rounded-xl shadow-lg hover:shadow-2xl hover:bg-midBlue/30 border-2 border-lightBlue hover:border-activeBlue ">
              <div className="w-1/2 px-4 xl:px-10 border-r-2 border-white/40 font-bold text-3xl lg:text-4xl xl:text-5xl text-right"><h4>Work</h4></div>
              <div className="w-1/2 px-4 xl:px-10 uppercase text-activeBlue font-medium text-base lg:text-lg xl:text-xl text-left"><p>What I can do for you ?</p></div>
            </div>
          </Link>
          <Link href="/blogs">
            <div className="link w-full lg:w-3/4 bg-lightBlue xl:px-16 py-8 xl:py-10 flex justify-between items-center rounded-xl shadow-lg hover:shadow-2xl hover:bg-midBlue/30 border-2 border-lightBlue hover:border-activeBlue ">
              <div className="w-1/2 px-4 xl:px-10 border-r-2 border-white/40 font-bold text-3xl lg:text-4xl xl:text-5xl text-right"><h4>Blog</h4></div>
              <div className="w-1/2 px-4 xl:px-10 uppercase text-activeBlue font-medium text-base lg:text-lg xl:text-xl text-left"><p>What I think these days</p></div>
            </div>
          </Link>

          <div className="w-full lg:w-3/4 flex justify-center lg:justify-end">
            <Link href="/talk">
              <button className="shadow-2xl px-10 py-4 hover:bg-darkBlue hover:text-activeBlue border-4 border-activeBlue bg-activeBlue rounded-full text-darkBlue font-bold text-xl">Lets Talk</button>
            </Link>
          </div>
        </div>
      </div>

      <p className="py-10 sm:py-0 pl-10 font-normal text-xl">Designed By <a rel="noreferrer" target="_blank" href="https://in.linkedin.com/in/deninpaul"><span>Denin Paul</span></a></p>
    </main>
  );
}
