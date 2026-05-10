import { useEffect, useState, useRef} from "react";
import { scrollToSection } from "../lib/utils";

export function Nav({ navHeight, setNavHeight }) {

    const [scrolled, setScrolled] = useState(false);
    

    const navRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if(navRef.current){
            setNavHeight(navRef.current.offsetHeight);
        }
    },[])

    

    return(
        <>
            <nav className={`cabin-regular flex justify-end fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-6 ${
                scrolled 
                    ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'
                }`}
                ref={navRef}
                >
                <ul className="flex flex-wrap justify-end gap-4 sm:gap-6 md:gap-4">
                    <li>
                        <button 
                            type="button"
                            className="cabin-semibold md:mx-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm md:text-lg tracking-tight cursor-pointer"
                            onClick={() => scrollToSection('about', navHeight)}
                        >
                            About Me
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            className="cabin-semibold md:mx-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm md:text-lg tracking-tight cursor-pointer"
                            onClick={() => scrollToSection('websites', navHeight)}
                        >
                            Websites
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            className="cabin-semibold md:mx-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm md:text-lg tracking-tight cursor-pointer"
                            onClick={() => scrollToSection('apps', navHeight)}
                        >
                            Apps
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            className="cabin-semibold md:mx-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm md:text-lg tracking-tight cursor-pointer"
                            onClick={() => scrollToSection('skills', navHeight)}
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            className="cabin-semibold md:mx-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm md:text-lg tracking-tight cursor-pointer"
                            onClick={() => scrollToSection('contact', navHeight)}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
