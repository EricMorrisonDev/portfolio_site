import { ReactTyped } from "react-typed"
import { techLogos } from "../data/projects"
import { scrollToSection } from "../lib/utils"

export function Header({ navHeight }) {

    return(
        <>
        <div className="w-9/10 md:w-4/5 max-w-4xl mx-auto content-panel px-6 pt-10 pb-8 md:px-12 md:pt-14 md:pb-12 rounded-lg md:rounded-[2rem]">
            <div className="flex flex-col items-center text-center">
                <h1 className="cabin-bold text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight">
                    Eric Morrison
                </h1>

                <p className="cabin-semibold text-lg md:text-2xl lg:text-3xl text-accent mt-4 md:mt-5 min-h-[1.4em] tracking-tight">
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
                </p>

                <div className="w-full max-w-xs border-b border-border my-8 md:my-10" aria-hidden />

                <p className="cabin-regular text-base md:text-lg text-primary leading-relaxed max-w-2xl">
                    I build websites and web applications for all purposes at reasonable rates!
                    Working directly with businesses in my community, I take great pride in translating clients&apos; ideas into technical results.
                    Let&apos;s build something!
                </p>

                <ul className="flex flex-wrap justify-center items-center gap-5 md:gap-7 mt-10 md:mt-12 list-none p-0 m-0" aria-label="Technologies">
                    {Object.values(techLogos).map((path, index) => (
                        <li key={index}>
                            <img
                                className="h-8 w-8 md:h-11 md:w-11 rounded-md opacity-85 hover:opacity-100 transition-opacity duration-200"
                                src={path}
                                alt=""
                            />
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 md:mt-12 pt-8 md:pt-10 border-t border-border w-full max-w-md">
                    <a
                        className="btn-cta text-xs md:text-base px-4 py-2 md:px-6 md:py-3"
                        href={`${import.meta.env.BASE_URL}Eric_Morrison_CV.pdf`}
                        download="Eric_Morrison_CV.pdf"
                    >
                        Resume
                    </a>
                    <a
                        className="btn-cta text-xs md:text-base px-4 py-2 md:px-6 md:py-3"
                        href="https://www.linkedin.com/in/eric-morrison-5ab7a338a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <button
                        type="button"
                        className="btn-cta text-xs md:text-base px-4 py-2 md:px-6 md:py-3"
                        onClick={() => scrollToSection('contact', navHeight)}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
