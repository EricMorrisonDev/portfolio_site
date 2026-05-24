import { useEffect, useState, useRef} from "react";
import { scrollToSection } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

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
            <nav
                className={`cabin-regular flex justify-end items-center fixed top-0 left-0 right-0 z-50 p-6 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-in-out ${
                scrolled
                    ? 'backdrop-blur-md shadow-md'
                    : 'shadow-none'
                }`}
                style={{ backgroundColor: scrolled ? 'var(--theme-nav-scrolled)' : 'transparent' }}
                ref={navRef}
                >
                <ul className="flex flex-wrap justify-end items-center gap-2 sm:gap-4 md:gap-2">
                    <li>
                        <ThemeToggle />
                    </li>
                    <li>
                        <button 
                            type="button"
                            className="nav-link"
                            onClick={() => scrollToSection('about', navHeight)}
                        >
                            About Me
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            className="nav-link"
                            onClick={() => scrollToSection('websites', navHeight)}
                        >
                            Websites
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            className="nav-link"
                            onClick={() => scrollToSection('apps', navHeight)}
                        >
                            Apps
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            className="nav-link"
                            onClick={() => scrollToSection('skills', navHeight)}
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            className="nav-link"
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
