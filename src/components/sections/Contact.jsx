import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';


export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false); // ⏳ loader state

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" })
            })
            .catch((error) => {
                //console.error("EmailJS Error:", error);
                alert("Oops! Something went wrong. Please, try again.");
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <section 
            id="contact" 
            className="min-h-screen flex items-center justify justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-80 sm:w-140">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get in Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text" 
                                value={formData.name}
                                placeholder="Name"
                                id="name" 
                                name="name" 
                                required 
                                className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded px-4 py-3 text-black dark:text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                            />
                        </div>
                        <div className="relative">
                            <input 
                                type="email" 
                                value={formData.email}
                                placeholder="example@email.com"
                                id="email" 
                                name="email" 
                                required 
                                className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded px-4 py-3 text-black dark:text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <textarea 
                                placeholder="Message"
                                value={formData.message}
                                id="message" 
                                name="message"
                                rows={5}
                                required 
                                className="w-full bg-white/5 border border-black/10 dark:border-white/10 rounded px-4 py-3 text-black dark:text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            {isLoading ? (
                                <div className="flex justify-center items-center w-full">
                                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-50" />
                                </div>
                                ) : (
                                'Send'
                            )}
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
}