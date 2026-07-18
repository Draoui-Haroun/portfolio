
import "../styles/skills.css";
import { FaLaptopCode, FaTools } from "react-icons/fa";

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <h2 className="section-title">Skills</h2>

            <p className="section-description">
                Technologies and development tools I use to build modern web applications.
            </p>

            <div className="skills-container">

                <div className="skills-card">
                    <h3>
                        <FaLaptopCode />
                        Frontend
                    </h3>
                    <div className="skill-list">
                        <span className="skill">HTML5</span>
                        <span className="skill">CSS3</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">React</span>
                        <span className="skill">Next.js</span>
                        <span className="skill">TypeScript</span>
                    </div>
                </div>

                <div className="skills-card">
                    <h3>
                        <FaTools />
                        Development Tools
                    </h3>
                    <div className="skill-list">
                        <span className="skill">Git</span>
                        <span className="skill">GitHub</span>
                        <span className="skill">VS Code</span>
                    </div>
                </div>

            </div>
        </section>
    );
}