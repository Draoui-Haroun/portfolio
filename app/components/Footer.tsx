
import "../styles/footer.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6"

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-container">

                <h2 className="footer-logo">Haroun.</h2>

                <p className="footer-description">
                    Building modern, responsive web applications with
                    React and Next.js.
                </p>

                <div className="footer-socials">

                    <a
                        href="https://github.com/Draoui-Haroun"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/draoui-haroun-1b0200413/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:draouiharoun63@gmail.com"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>

                </div>

                <div className="footer-line"></div>

                <p className="footer-copy">
                    © 2026 Haroun. All rights reserved.
                </p>

            </div>
        </footer>
    )
}