
export function Footer(){

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

    return(
        <footer className="bg-gradient-to-br from-black via-zinc-900 to-neutral-800 mt-24 py-12 md:py-24 border-t border-cyan-400/20">
            <div className="flex w-9/10 mx-auto justify-between">
                <div className="w-2/3 md:w-full">
                    <h3 className="cabin-bold text-base md:text-xl mb-4 text-gray-300">
                    © {new Date().getFullYear()} Eric Morrison
                    </h3>
                    <p className="cabin-regular text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
                        Full Stack Developer specializing in{' '}
                        <span className="source-code-pro-medium text-gray-300">React</span>,{' '}
                        <span className="source-code-pro-medium text-gray-300">Node.js</span>, and modern web technologies.
                    </p>
                </div>
                <button type="button" onClick={scrollToTop} className="shrink-0 cursor-pointer self-start md:self-center" aria-label="Scroll to top">
                    <img src={`${import.meta.env.BASE_URL}img/noun-chevron-up-7864000-67E8F9.svg`}
                    className="h-[50px] w-[50px] md:h-[75px] md:w-[75px]"/>
                </button>
            </div>
        </footer>
    )
}