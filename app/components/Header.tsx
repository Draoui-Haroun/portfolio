
"use client"
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css";


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {

        const handleScroll = () => {

            const sections = [
                "home",
                "about",
                "skills",
                "projects",
                "contact",
            ];

            let current = "home";

            sections.forEach((id) => {

                const section = document.getElementById(id);

                if (!section) return;

                const top = section.offsetTop - 120;
                const height = section.offsetHeight;

                if (window.scrollY >= top &&
                    window.scrollY < top + height) {
                    current = id;
                }

            });

            setActiveSection(current);

        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return(
        <header className="header">

            <div className="logo">
                <a href="#home">{"<Haroun />"}</a>
            </div>

            <nav className={`nav-links ${isOpen ? "active" : ""}`}>
                <a 
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                >Home</a>
                <a 
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                >About</a>
                <a 
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
                >Skills</a>
                <a 
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                >Project</a>
                <a 
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                >Contact</a>
            </nav>

            <a href="/cv.pdf" download className="resume-btn" >Resume</a>

            <button
                className="menu-btn"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
}