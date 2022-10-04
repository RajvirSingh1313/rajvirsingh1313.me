import { FaTwitterSquare, FaGithub, FaDev } from 'react-icons/fa';

export default function IconsRow() {
    return (
        <div className="flex space-x-6 items-center text-activeBlue">
            <a className="hover:bg-transparent" rel="noreferrer" target="_blank" href="https://github.com/RajvirSingh1313/"><FaGithub className='w-8 h-8 shadow-xl hover:text-white' /></a>
            <a className="hover:bg-transparent" rel="noreferrer" target="_blank" href="https://twitter.com/SinghRajvir1313"><FaTwitterSquare className='w-8 h-8 shadow-xl hover:text-white' /></a>
            <a className="hover:bg-transparent" rel="noreferrer" target="_blank" href="https://dev.to/rajvirsingh1313"><FaDev className='w-8 h-8 shadow-xl hover:text-white' /></a>
        </div>)
}
