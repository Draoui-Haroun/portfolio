
"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import "../styles/contact.css";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {

    const [loading, setLoading] = useState(false);

    const sendEmail = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        if (!form.current) return;
        setLoading(true);
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            toast.success("Message sent successfully!");
            form.current.reset();
            setLoading(false);

        } catch (error) {
            console.log(error)
            toast.error("Failed to send message.");
            
        }
        setLoading(false);

    };

    const form = useRef<HTMLFormElement>(null);

    return (
        <section className="contact" id="contact">

            <h2 className="section-title">Get In Touch</h2>

            <p className="section-description">
                Have a project in mind, an internship opportunity, or just want to say hello?
                Feel free to reach out. I'd love to hear from you.
            </p>

            <div className="contact-container">

                <div className="contact-info">

                    <h3>Let's Connect</h3>

                    <p>
                        I'm always open to discussing new opportunities,
                        interesting projects, or simply connecting with other developers.
                    </p>

                    <div className="contact-item">
                        <FaEnvelope />
                        <a href="mailto:draouiharoun63@gmail.com">
                            draouiharoun63@gmail.com
                        </a>
                    </div>

                    <div className="social-links">
                        <a
                            href="https://github.com/Draoui-Haroun"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card"
                        >
                            <FaGithub className="social-icon"/>

                            <div>
                                <h4>GitHub</h4>
                                <p>Explore my repositories</p>
                            </div>

                        </a>

                        <a
                            href="https://www.linkedin.com/in/draoui-haroun-1b0200413/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card"
                        >
                            <FaLinkedin className="social-icon"/>

                            <div>
                                <h4>LinkedIn</h4>
                                <p>Connect with me</p>
                            </div>

                        </a>

                    </div>

                    <div className="contact-item">
                        <FaMapMarkerAlt />
                        <span>Algeria</span>
                    </div>

                </div>

                <form
                    ref={form}
                    className="contact-form"
                    onSubmit={sendEmail}
                >

               <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                />

                <input
                    type="text"
                    name="from_email"
                    placeholder="Your Email"
                    required
                />                

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    required
                />

                <button type="submit" disabled={loading} >
                    <FaPaperPlane />
                    {loading ? "sending..." : "Send Message"}
                </button>

            </form>
        </div>
    </section>
    );
}