import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () => {

    const homesCarousel = [
        {
            name: "Home 1",
            img: "/projects/homes/home01.png",
            prompt: "Luxurious riad villa, modern yet rustic, elegant neutral tones, …"
        },
        {
            name: "Home 2",
            img: "/projects/homes/home02.png",
            prompt: "outdoor braai area, Mediterranean sunlight, stylish and serene ambiance"
        },
        {
            name: "Home 3",
            img: "/projects/homes/home03.png",
            prompt: "Luxurious southern french kitchen villa, modern yet rustic, …"
        },
        {
            name: "Home 4",
            img: "/projects/homes/home04.png",
            prompt: "Luxurious southern french villa, modern yet rustic, …"
        },
        {
            name: "Home 5",
            img: "/projects/homes/home05.png",
            prompt: "Luxurious riad villa, modern yet rustic, elegant moroccan style neutral tones, …"
        }
    ];

    const brandCarousel = [
        {
            name: "Logo",
            img: "/projects/brand/logo.png"
        },
        {
            name: "polo",
            img: "/projects/brand/polo.png"
        },
        {
            name: "modelPolo",
            img: "/projects/brand/model01.png"
        },
        {
            name: "cap",
            img: "/projects/brand/cap.png"
        },
        {
            name: "modelCap",
            img: "/projects/brand/model02.png"
        },
        {
            name: "sweater",
            img: "/projects/brand/sweater.png"
        },
        {
            name: "modelSweater",
            img: "/projects/brand/model03.png"
        },
        {
            name: "modelSweater",
            img: "/projects/brand/model04.png"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">This portfolio</h3>
                            <p className="text-gray-400 mb-4">A modern, responsive portfolio. Features include smooth animations, email integration and a clean, minimalist design.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Node", "Vite", "React", "GSAP", "Tailwind Css", "EmailJS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Momotaro – In progress!</h3>
                            <p className="text-gray-400 mb-4">Based on Masao Kusuyama’s version, I translated the Japanese fairy tale Momotaro into Catalan and Spanish, and also produced the illustrations and bookbinding using Canva and ChatGPT.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Canva", "ChatGPT", "Amazon KDP"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 pt-4">
                        <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition overflow-hidden">
                            <h3 className="text-xl font-bold mb-2">AI - Homes</h3>
                            <p className="text-gray-400 mb-4">Carousel with five AI images created with the beginning of its prompt using Midjourney.</p>

                            <div className="carousel carousel-center md:carousel-end sm:space-x-4">
                                {homesCarousel.map((item, i) => (
                                    <figure key={i} className="carousel-item shrink-0 flex flex-col w-full max-w-xs sm:max-w-[460px]">
                                        <img
                                            className="rounded-xl object-contain w-full max-w-full h-[380px]"
                                            src={item.img}
                                            alt={item.name}
                                        />
                                        <figcaption className="mt-2 text-sm text-gray-500 italic">
                                            {item.prompt}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 pt-4">
                        <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">AI - Cloth Brand</h3>
                        <p className="text-gray-400 mb-4">Carousel with five AI images (logo and four model images) created using ChatGPT.</p>

                            <div className="carousel carousel-center md:carousel-end space-x-4 bg-transparent dark:bg-white">
                                {brandCarousel.map((item, i) => (
                                    <figure key={i} className="carousel-item shrink-0 flex flex-col max-w-[350px] sm:max-w-[460px]">
                                        <img
                                            className="rounded-xl object-contain w-[460px] h-[380px]"
                                            src={item.img}
                                            alt={item.name}
                                        />
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}