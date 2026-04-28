import { ReactTyped } from "react-typed"
import { techLogos } from "../data/projects"

export function Header() {

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 w-9/10 md:w-4/5 mx-auto bg-gradient-to-br from-black via-zinc-900 to-neutral-800 p-4 pt-8 md:p-12 rounded-lg md:rounded-[2rem]">
                <div className="md:col-span-2">
                    <h1 className="nunito-sans-bold text-5xl lg:text-8xl mb-4 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                        Eric Morrison
                    </h1>
                    <h3 className="source-code-pro-regular text-xl md:text-5xl my-8 text-gray-300">
                        <ReactTyped
                            strings={[
                                "Full Stack Web Developer",
                                "Self-Taught Problem Solver",
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
                    <img src={`${import.meta.env.BASE_URL}img/Eric_headshot_portrait.png`} className="rounded-lg shadow-md md:h-[460px] w-full object-cover"></img>
                </div>
                <div className="md:col-span-2 mt-4 md-mt-0">
                    <h4 className="nunito-sans-regular md:source-code-pro-italic text-base md:text-xl mb-4 md:w-9/10 text-gray-300">I’m a self-taught developer who builds responsive, data-driven web apps using React, Tailwind, Node, Express, and PostgreSQL.</h4>
                    <h4 className="nunito-sans-regular md:source-code-pro-italic text-base md:text-xl mb-4 md:w-9/10 text-gray-300">I’ve deployed several full stack projects and worked directly with clients in my community. This has taught me not only how to code, but to communicate clearly, establish expectations, and deliver usable results.</h4>
                    <h4 className="nunito-sans-regular md:source-code-pro-italic text-base md:text-xl mt-4 md:mt-8 md:w-9/10 text-gray-300">I am constantly learning and absolutely LOVE a challenge. Let's build something!</h4>
                </div>
                <div className="grid grid-rows-2 grid-cols-4 md:flex gap-2 md:gap-6 md:col-span-2 gap-y-12 my-8 ml-4 max-h-[100px]">
                    {Object.values(techLogos).map((path, index) => (
                            <img key={index} 
                            className="h-[50px] w-[50px] rounded-lg" 
                            src={path}
                            alt="tech logo"
                            />
                    ))}
                </div>
        </div>
        </>
    )
}