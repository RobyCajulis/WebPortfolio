import Resume from "../assets/Resume.pdf";
import CV from "../assets/CV.pdf";

function Landing(){
    return(
        <>
        <div className="min-h-screen bg-gray-950">
        <div className="flex flex-col gap-2 pt-32 md:pt-45 md:ps-40">
            <div className="text-white px-6 md:ps-85 pt-20 md:pt-35 font-bold tracking-tight text-justify">
                <h1 className="text-7xl font-bold tracking-tight">Hi,I'm Rossbrent,</h1>

                <p className ="text-7xl font-bold tracking-tight">
                    <span>Full-Stack</span>
                    <span className="text-7xl text-gray-600"> Developer</span>
                </p>

                <p className="text-gray-400 text-base md:text-lg mt-5 text-justify leading-8">
                    <span>I am driven by a passion for continuous learning and thrive on solving complex technical challenges across the entire</span>
                </p>
                <p className="text-gray-400 text-base md:text-lg text-justify leading-8">
                    <span>stack from intuitive user interfaces to robust server-side architecture. I am currently seeking a role where I can leverage</span>
                </p>
                <p className="text-gray-400 text-base md:text-lg text-justify leading-8">
                    <span>my development expertise to contribute to high-impact projects while refining my skills in a collaborative professional</span>
                </p>
                <p className="text-gray-400 text-base md:text-lg text-justify leading-8">
                    <span>environment.</span>
                </p>

                <ul className="flex text-base">
                    <li className="my-6 md::my-0">
                        <button className="relative px-6 py-3 font-semibold text-gray-400 border-2 border-gray-500 overflow-hidden group rounded-xl cursor-pointer">
                        <span className="absolute inset-0 w-full h-full bg-gray-500 transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-150 transition-transform duration-800 ease-in-out z-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-gray-500 transform scale-x-0 origin-right rounded-tl-full rounded-bl-full group-hover:scale-x-150 transition-transform duration-800 ease-in-out z-0"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-800">
                                <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                                </span>
                        </button>
                    </li>

                    <li className="mx-4 my-6 md::my-0">
                        <button className="relative px-6 py-3 font-semibold text-gray-400 border-2 border-gray-500 overflow-hidden group rounded-xl cursor-pointer">
                        <span className="absolute inset-0 w-full h-full bg-gray-500 transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-150 transition-transform duration-800 ease-in-out z-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-gray-500 transform scale-x-0 origin-right rounded-tl-full rounded-bl-full group-hover:scale-x-150 transition-transform duration-800 ease-in-out z-0"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-800">
                                <a href="mailto:robycajulis01@gmail.com" target="_blank" rel="noreferrer">Email</a>
                                </span>
                        </button>
                    </li>

                  <li className="my-6 md::my-0">
                    <button className="relative px-6 py-3 font-semibold text-gray-400 border-2 border-gray-500 overflow-hidden group rounded-xl cursor-pointer">
                        <span className="absolute inset-0 w-full h-full bg-gray-500 transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-150 transition-transform duration-800 ease-in-out z-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-gray-500 transform scale-x-0 origin-right rounded-tl-full rounded-bl-full group-hover:scale-x-150 transition-transform duration-800 ease-in-out z-0"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-800">
                        <a href={CV} target="_blank" rel="noreferrer">CV</a>
                        </span>
                     </button>
                  </li>
                </ul>
                
            </div>
        </div>
        </div>
        </>
    )
}


export default Landing;

