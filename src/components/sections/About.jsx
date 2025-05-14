import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {


    const containerSkills = ["Docker", "Kubernetes"];
    const ciCdSkills = ["Jenkins"];
    const iaCSkills = ["Kind", "Terraform"];
    const cloudSkills = ["AWS"];
    const monitoringSkills = ["Prometheus", "Grafana", "Elasticsearch", "Kibana"];
    const versionControlSkills = ["Git", "GitHub"];

    const frontendSkills = ["Vite", "React", "Tailwind CSS", "TypeScript", "Axios"];
    const backendSkills = ["Node", "Symfony", "MySQL", "MongoDB"];
    const semSkills = ["Google Ads", "Google Trends", "Google Analytics", "Meta Ads"];
    const aiSkills = ["ChatGPT", "Midjourney", "Leonardo AI", "Qwen"];

    return (
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        > 
            <RevealOnScroll>       
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto text-center">
                        I am a curious developer who loves learning and exploring new things, always looking for new challenges to grow and refine my skills.
                    </p>
                    <div className="rounded-xl p-8 border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
                        
                        <h3 className="text-xl font-bold mb-4">Skills and Programs as a DevOps</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">Containers</h4>
                                <div className="flex flex-wrap gap-2">
                                    {containerSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">CI/CD</h4>
                                <div className="flex flex-wrap gap-2">
                                    {ciCdSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">IaC</h4>
                                <div className="flex flex-wrap gap-2">
                                    {iaCSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">Cloud</h4>
                                <div className="flex flex-wrap gap-2">
                                    {cloudSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">Monitoring</h4>
                                <div className="flex flex-wrap gap-2">
                                    {monitoringSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">Repos</h4>
                                <div className="flex flex-wrap gap-2">
                                    {versionControlSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl p-8 border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all  mt-8">
                        
                        <h3 className="text-xl font-bold mb-4">Other Skills and Programs</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">Frontend</h4>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">Backend</h4>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">SEM</h4>
                                <div className="flex flex-wrap gap-2">
                                    {semSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h4 className="text-xl font-bold mb-4">AI</h4>
                                <div className="flex flex-wrap gap-2">
                                    {aiSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <div className="space-y-4 text-gray-500 dark:text-gray-300">
                                <div>
                                    Bachelor's degree in Translation and Interpreting
                                    <p className="text-gray-400 mb-2">UPF (Barcelona, 2021-2025)</p>
                                </div>
                                <div>
                                    Erasmus - Bachelor's degree in Translation and Interpreting
                                    <p className="text-gray-400 mb-2">Université de Lorraine (Nancy, 2023)</p>
                                </div>
                                <div>
                                    Advanced vocational trining, Web Application Development
                                    <p className="text-gray-400 mb-2">INS La Pineda (Badalona, 2018-2020)</p>
                                </div>
                                <div>
                                    Intermediate vocational trining, Microcomputer Systems and Networks
                                    <p className="text-gray-400 mb-2">Escoles Freta (Calella, 2016-2018)</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Certified Languages</h3>
                            <div className="space-y-4 text-gray-500 dark:text-gray-300">
                                <div>
                                    <h4>Catalan</h4>
                                    <p className="text-gray-400 mb-2">Native + Professional Translation Skills</p>
                                </div>
                                <div>
                                    <h4>Spanish</h4>
                                    <p className="text-gray-400 mb-2">Native + Professional Translation Skills</p>
                                </div>
                                <div>
                                    <h4>English</h4>
                                    <p className="text-gray-400 mb-2">C1</p>
                                </div>
                                <div>
                                    <h4>French</h4>
                                    <p className="text-gray-400 mb-2">B2.2</p>
                                </div>
                                <div>
                                    <h4>Japanese</h4>
                                    <p className="text-gray-400 mb-2">B2.2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Hobbies</h3>
                            <ul className="list-disc list-inside text-gray-500 dark:text-gray-300 space-y-2">
                                <li>Read books;</li>
                                <li>Travel around the world;</li>
                                <li>Drink coffee;</li>
                                <li>Gym;</li>
                                <li>Learn new things.</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Featured Certifications</h3>
                            <div className="space-y-4 text-gray-500 dark:text-gray-300">
                                <div>
                                    <h4>DevOps Career | AWS, Linux, Scripting, Jenkins, Ansible, GitOps, Docker, Kubernetes, & Terraform.</h4>
                                    <p className="text-gray-400 mb-2">Udemy</p>
                                    <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer">In progress!</a>
                                </div>
                                <div>
                                    <h4>ISTQB Certified Tester</h4>
                                    <p className="text-gray-400 mb-2">Udemy</p>
                                    <a href="https://www.udemy.com/certificate/UC-aa1f53ae-69c6-4986-8fe4-f3b3b158a311/" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer">View Credential →</a>
                                </div>
                                <div>
                                    <h4>Certification Prep PMP Course</h4>
                                    <p className="text-gray-400 mb-2">Udemy</p>
                                    <a href="https://www.udemy.com/certificate/UC-8b5fe719-3415-403a-87ba-b20d6302f4de/" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer">View Credential →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};