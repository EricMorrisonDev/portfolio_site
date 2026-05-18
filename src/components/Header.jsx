import { ReactTyped } from "react-typed"
import { techLogos } from "../data/projects"
import { scrollToSection } from "../lib/utils"

export function Header(props) {

    const { navHeight } = props

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 w-9/10 md:w-4/5 mx-auto bg-gradient-to-br from-black via-zinc-900 to-neutral-800 p-4 pt-8 md:p-12 rounded-lg md:rounded-[2rem] border border-1 border-gray-300">
                <div className="md:col-span-2">
                    <h1 className="cabin-bold text-5xl lg:text-8xl mb-4 text-gray-300">
                        Eric Morrison
                    </h1>
                    <h3 className="cabin-semibold text-xl md:text-5xl my-8 text-gray-300 tracking-tight">
                        <ReactTyped
                            strings={[
                                "Full Stack Web Developer",
                                "Building Modern Web Apps"
                            ]}
                            typeSpeed={50}
                            backSpeed={30}
                            loop
                            backDelay={2000}
                            showCursor={true}
                            cursorChar="|"
                        />
                    </h3>
                </div>
                <div className="md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-3">
                    <img src={`${import.meta.env.BASE_URL}img/Eric_headshot_portrait.png`} className="rounded-lg shadow-md md:h-[557px] w-full object-cover"></img>
                </div>
                <div className="md:col-span-2 mt-4 md-mt-0">
                    <h4 className="cabin-regular text-base md:text-lg mb-4 md:w-9/10 text-gray-300 leading-relaxed">I’m a full stack web developer who builds responsive, modern, professional websites at reasonable rates. I take pride in being a great communicator who excels at translating clients' ideas into technical results.</h4>
                    <h4 className="cabin-regular text-base md:text-lg mb-4 md:w-9/10 text-gray-300 leading-relaxed">
                        If you need a website, or would like to make changes to an existing website, I'm all over it. 
                        <button type="button" onClick={() => {scrollToSection('websites', navHeight)}} className="cabin-medium underline underline-offset-4 mr-1 cursor-pointer hover:text-cyan-400 transition-colors duration-200">
                            Take a look at some of my work
                        </button> 
                        to see what I can do for you. </h4>
                    <h4 className="cabin-regular text-base md:text-lg mb-4 md:w-9/10 text-gray-300 leading-relaxed">I'm also an avid software engineer who builds data-driven web apps using Next.js, React, Typescript,  Node, Express, and PostgreSQL. Feel free to 
                     <button type="button" onClick={() => {scrollToSection('apps', navHeight)}} className="cabin-medium underline underline-offset-4 mx-1 cursor-pointer hover:text-cyan-400 transition-colors duration-200">
                        check out my applications;
                     </button>
                      I had a blast making them.</h4>
                    <h4 className="cabin-regular text-base md:text-lg mt-4 md:mt-8 md:w-9/10 text-gray-300 leading-relaxed">I am constantly learning and absolutely LOVE a challenge. Let's build something!</h4>
                </div>
                <div className="flex gap-4 md:gap-6 md:col-span-2 gap-y-12 my-8 max-h-[100px]">
                    {Object.values(techLogos).map((path, index) => (
                            <img key={index} 
                            className="h-[25px] w-[25px] md:h-[50px] md:w-[50px] rounded-lg" 
                            src={path}
                            alt="tech logo"
                            />
                    ))}
                </div>
        </div>
        </>
    )
}