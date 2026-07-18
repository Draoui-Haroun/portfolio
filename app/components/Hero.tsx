
import "../styles/hero.css";
import Image from "next/image";

export default function Hero() {

    return(
        <section className="hero">

            <div className="hero-content">
                <h2>Hello ,I'm</h2>
                <h1>Haroun</h1>
                <h3 className="hero-role">Frontend Developer</h3>
                <p>I build modern, responsive web applications using React, Next.js and TypeScript.</p>
                <div className="hero-buttons">
                    <a className="primary-btn" href="#projects">View Projects</a>
                    <a className="secondary-btn" href="#contact">Contact Me</a>
                </div>
            </div>

            <div className="hero-image">
                <Image
                    src="/images/profile/profile-portfolio.png"
                    alt="Haroun Draoui"
                    width={400}
                    height={350}
                    priority
                />
            </div>
            
        </section>
    )
}