
export function Footer(){

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

    return(
        <footer className="bg-gradient-to-br from-black via-zinc-900 to-neutral-800 mt-24 py-12 md:py-24 border-t border-cyan-400/20">
            <div className="flex w-9/10 mx-auto justify-between">
                <div className="w-2/3 md:w-full">
                    <h3 className="text-cyan-400 font-bold text-base md:text-xl mb-4 nunito-sans-bold">
                    © {new Date().getFullYear()} Eric Morrison
                    </h3>
                    <p className="text-gray-400 text-sm source-code-pro-regular">
                        Full Stack Developer specializing in React, Node.js, and modern web technologies.
                    </p>
                </div>
                <button onClick={scrollToTop}>
                    <img src={`${import.meta.env.BASE_URL}img/noun-chevron-up-7864000-67E8F9.svg`}
                    className="h-[50px] w-[50px] md:h-[75px] md:w-[75px]"/>
                </button>
            </div>
        </footer>
    )
}