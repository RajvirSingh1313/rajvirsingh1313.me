import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function about() {
  return (
    <main className="overflow-hidden scroll-none AboutHero px-10 xl:px-24 sm:py-10 text-2xl h-screen lg:h-5/6">
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full lg:w-1/2 h-full pt-32">
          <h1 className="text-activeBlue font-bold text-8xl">About</h1>
          <h3 className="my-3 uppercase text-white font-medium text-2xl tracking-widest">who i am ?</h3>
          <p className="w-full lg:w-3/4 text-2xl leading-8">
            My name is Rajvir Singh, And I am from Punjab, India.I am currently a developer, a freelancer, a writer. Yeah I also want to become a material scientist but sure, I will be. I don&apos;t know what to say here but yeah just check out some of my work on <a target="_blank" rel="noreferrer" href="https://github.com/RajvirSingh1313?tab=repositories">github</a> or my <Link className="link" href="/blogs">blogs</Link>.
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
