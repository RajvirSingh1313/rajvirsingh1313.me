import IconsRow from '../components/IconsRow';

export default function talk() {
  return (
    <main className="TalkHero px-10 xl:px-24 sm:py-10 text-2xl h-5/6">
      <div className="w-full h-full space-y-4 flex flex-col items-center pt-36">
        <h1 className="text-activeBlue font-bold text-8xl">Lets Talk</h1>
        <h3 className="font-bold text-4xl"><span className="text-activeBlue">Email :- </span>dev.rajvirsingh1313@gmail.com</h3>
        <IconsRow/>
      </div>
    </main>
  )
}
