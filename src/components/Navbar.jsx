import { useEffect } from "react";
import { Link } from "react-scroll";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="/" target="_self" className="font-mono text-xl font-bold text-white">Adrià Aubanell</a>

                    {/*Mobile menu*/}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    {/*Desktop menu*/}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="home" 
                            smooth={true}
                            duration={500} 
                            className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            Home
                        </Link>
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            activeClass="active-link"
                            className="link-underline cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            About
                        </Link> 
                        <Link 
                            to="projects" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            activeClass="active-link" 
                            className="link-underline cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            Projects
                        </Link> 
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            activeClass="active-link" 
                            className="link-underline cursor-pointer text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};