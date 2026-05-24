
export function Footer(){

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

    return(
        <footer className="content-panel mt-24 py-12 border-t border-accent/20 rounded-none">
            <div className="flex w-9/10 mx-auto justify-between">
                <div className="w-2/3 md:w-full">
                    <h3 className="cabin-bold text-base md:text-xl mb-4 text-primary">
                    © {new Date().getFullYear()} Eric Morrison
                    </h3>
                    
                </div>
                <button type="button" onClick={scrollToTop} className="shrink-0 cursor-pointer self-start md:self-center text-accent hover:text-accent-hover transition-colors" aria-label="Scroll to top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[50px] w-[50px] md:h-[75px] md:w-[75px]" aria-hidden>
                        <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </footer>
    )
}