
import "../styles/about.css";
import { FaLocationDot, FaGraduationCap, FaCode, FaRocket } from "react-icons/fa6";
import Journey from "../journey/page";

export default function About() {

    return(
        <section className="about" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <h2>Who I Am</h2>
                <p>I'm a Mechanical Engineering student with a passion for Front-End Development.</p>
                <p>I enjoy building responsive and user-friendly web applications using React, Next.js, and TypeScript. Through personal projects and continuous learning, I'm constantly improving my technical and problem-solving skills.</p>
            </div>

            <div className="about-cards">
                <div className="card">
                    <FaLocationDot className="card-icon" />
                    <h3>Location</h3>
                    <p>Algeria</p>
                </div>
                <div className="card">
                    <FaGraduationCap className="card-icon" />
                    <h3>Education</h3>
                    <p>Mechanical Engineering Student</p>
                </div>
                <div className="card">
                    <FaCode className="card-icon" />
                    <h3>Focus</h3>
                    <p>Frontend Developer</p>
                </div>
                <div className="card">
                    <FaRocket className="card-icon" />
                    <h3>Availability</h3>
                    <p>Open to Opportunities</p>
                </div>

                <a className="story-link" href="/journey">Read My Story</a>
            </div>
        </section>
    )
} 

 