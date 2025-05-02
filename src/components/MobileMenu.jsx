import { useEffect } from "react";
import { Link } from "react-scroll";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {

    return (
       <div 
            className={`fixed tpo-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8)] z-40 
            flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-blue-100 dark:bg-black
       
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" 
                : "h-0 opacity-0 pointer-events-none"
            }
       `}>

            <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6  text-black dark:text-gray-100 text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <Link 
                to="home" 
                smooth={true}
                duration={500} 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-black dark:text-gray-100 my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Home
            </Link>
            <Link 
                to="about" 
                smooth={true}
                duration={500} 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-black dark:text-gray-100 my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                About
            </Link>
            <Link 
                to="projects" 
                smooth={true}
                duration={500} 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-black dark:text-gray-100 my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Projects
            </Link>
            <Link 
                to="contact" 
                smooth={true}
                duration={500} 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-black dark:text-gray-100 my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                Contact
            </Link>
       </div>
    );
};