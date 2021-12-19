import Head from 'next/head'
import Navbar from './components/Navbar';
import { SiFiverr } from "react-icons/si";
import { FaGithub, FaDev } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-body text-white" >
      <Head>
        <title>Rajvir Singh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="flex flex-col md:flex-row w-full h-full">

        <div className="px-7 py-2 md:px-48 md:py-48 w-full md:w-1/2 flex justify-center flex-col">
          <h1 className="text-xl md:text-3xl font-bold">Hey There,</h1>
          <h1 className="text-blue text-6xl md:text-8xl font-bold">Rajvir Singh</h1>
          <h1 className="text-xl md:text-3xl my-5">Developer. Blogger. Freelancer.<br />Material Scientist</h1>
          <div className="flex flex-row space-x-6 items-center">
            <a target="_blank" rel="noreferrer" href="https://github.com/RajvirSingh1313"><FaGithub className="text-blue hover:text-white  text-3xl" /></a>
            <a target="_blank" rel="noreferrer" href="https://dev.to/rajvirsingh1313"><FaDev className="text-blue hover:text-white  text-3xl" /></a>
            <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/rajvirsingh1313"><SiFiverr className="text-white text-4xl bg-blue hover:bg-white hover:text-blue rounded-full p-1" /></a>
          </div>
        </div>

        <div className="px-7 lg:px-48 w-full lg:w-1/2 flex justify-between pt-5 lg:pt-20 flex-col">
          <a href="/about"><div className="flex md:flex-row flex-col justify-center hover:bg-blue group  hover:cursor-help items-center bg-lightPurple rounded w-full mt-10 lg:mt-0 lg:w-4/5 p-10" style={{ boxShadow: '4.49575px 12.5881px 17.983px rgba(0, 0, 0, 0.03), inset 3.5966px 3.5966px 3.5966px rgba(0, 0, 0, 0.06)' }}>
            <h1 className="text-3xl lg:text-5xl font-bold">About</h1>
            <div className="h-full w-px bg-white mx-4 lg:mx-8"></div>
            <h1 className="text-lg lg:text-xl font-medium lg:w-40 text-left text-blue group-hover:underline group-hover:text-white uppercase">Who I am ?</h1>
          </div></a>
          <a href="/work"><div className="flex md:flex-row flex-col justify-center hover:bg-blue group  hover:cursor-help items-center bg-lightPurple rounded w-full mt-10 lg:mt-0 lg:w-4/5 p-10" style={{ boxShadow: '4.49575px 12.5881px 17.983px rgba(0, 0, 0, 0.03), inset 3.5966px 3.5966px 3.5966px rgba(0, 0, 0, 0.06)' }}>
            <h1 className="text-3xl lg:text-5xl font-bold">&nbsp;&nbsp;Work</h1>
            <div className="h-full w-px bg-white mx-4 lg:mx-8"></div>
            <h1 className="text-lg lg:text-xl font-medium lg:w-40 text-left text-blue group-hover:underline group-hover:text-white uppercase">What I can do for you ?</h1>
          </div></a>
          <a rel="noreferrer" href="https://dev.to/rajvirsingh1313"><div className="flex md:flex-row flex-col justify-center hover:bg-blue group  hover:cursor-help items-center bg-lightPurple rounded w-full mt-10 lg:mt-0 lg:w-4/5 p-10" style={{ boxShadow: '4.49575px 12.5881px 17.983px rgba(0, 0, 0, 0.03), inset 3.5966px 3.5966px 3.5966px rgba(0, 0, 0, 0.06)' }}>
            <h1 className="text-3xl lg:text-5xl font-bold">&nbsp;&nbsp;&nbsp;Blog</h1>
            <div className="h-full w-px bg-white mx-4 lg:mx-8"></div>
            <h1 className="text-lg lg:text-xl font-medium lg:w-40 text-left text-blue group-hover:underline group-hover:text-white uppercase">What I think these days</h1>
          </div></a>
          <a href="/contact" className="flex w-full md:w-4/5 md:mt-0 mt-10 justify-center md:justify-end">
            <button className="bg-blue hover:underline hover:text-white text-black font-bold rounded-full p-4 w-36">Lets Talk</button>
          </a>
        </div>


      </div>
      <h1 className="px-24 md:mt-0 my-10 md:px-48 text-xl">Designed By <a className="text-blue hover:underline hover:cursor-pointer" rel="noreferrer" href="https://in.linkedin.com/in/deninpaul" target="_blank">Denin Paul</a></h1>
      <img className="absolute bottom-0 md:w-2/3 h-4/5 w-full" style={{ zIndex: -1 }} src="/HomeHeroPattern.png" alt="" />
    </div>
  )
}
