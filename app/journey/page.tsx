
import Link from "next/link";
import "./journey.css"
import { FiExternalLink } from "react-icons/fi";


export default function Journey() {
    return(
        <section className="journey">

            <header className="journey-hero">
                <h1>My Journey</h1>

                <p>
                    From Mechanical Engineering student to Frontend Developer,
                    this page tells the story of how I discovered programming,
                    the challenges I faced, and the projects that shaped my skills.
                </p>
            </header>

            <div className="chapter">
                <h2>chapter 1: How It Started</h2>
                <h3>Why I Started Programming</h3>
                <p>
                    My journey into programming began with a simple curiosity about how websites
                    and applications are built. As a Mechanical Engineering student, I enjoyed
                    solving technical problems and working through logical challenges. Programming
                    introduced me to a new way of thinking, where creativity and problem-solving
                    come together to build useful and interactive solutions
                </p>
                <h3>Why I Chose Software Development</h3>
                <p>
                    While exploring various fields of technology—drawing on my year and a half of 
                    experience as a logo designer—I discovered that software development aligns 
                    perfectly with my interests; I truly enjoyed seeing ideas transform into real-world
                     applications used by people. Web development, in particular, allowed me to combine 
                     design, logic, and creativity while continuously learning new technologies. 
                     This experience motivated me to focus on becoming a front-end developer and 
                     to keep honing my skills through personal projects and practical experience.
                </p>
            </div>

            <div className="chapter">
                <h2>chapter 2: Learning the Fundamentals</h2>
                <h3>HTML & CSS</h3>
                <p>
                    began my web development journey by learning HTML and CSS, understanding
                    how websites are structured and styled. Through building small landing pages
                    and responsive layouts, I developed a solid foundation in semantic HTML,
                    modern CSS, Flexbox, Grid, and responsive design principles. These projects
                    helped me appreciate the importance of clean, accessible, and user-friendly
                    interfaces
                </p>
                <h3>JavaScript</h3>
                <p>
                    After mastering the basics of web design, I moved on to JavaScript to make
                    websites interactive. I learned variables, functions, arrays, objects, DOM
                    manipulation, events, asynchronous programming, and API requests. By creating
                    practical projects and solving coding challenges, I strengthened both my
                    programming skills and my ability to think logically when solving problems.
                </p>
            </div>

            <div className="chapter">
                <h2>chapter 3: Moving to React</h2>
                <h3>Tools</h3>
                <p></p>
                <h3>Projects</h3>
                <p>
                    Once I had mastered JavaScript, I realized the job market demanded other key
                    skills. After analyzing market needs, I began learning React to build modern,
                    dynamic user interfaces. Understanding concepts such as components, props, state,
                    hooks, and code reusability fundamentally transformed my approach to web development,
                    enabling me to create applications that are easier to organize, maintain, and scale.
                </p>
            </div>

            <div className="chapter">
                <h2>chapter 4: Next.js & TypeScript</h2>
                <h3>Modern Development Tools</h3>
                <p>
                    After learning React, I moved to Next.js and TypeScript to build faster,
                    more structured, and production-ready applications. I learned file-based
                    routing, the App Router, server and client components, API integration,
                    SEO optimization, and static asset management. TypeScript also helped me
                    write safer and more maintainable code.
                </p>
                <h3>Projects</h3>
                <p>
                    Using Next.js, I developed projects such as my personal portfolio and an
                    e-commerce application. These projects included responsive layouts, product
                    filtering and search, shopping cart functionality with Context API and Local
                    Storage, contact forms with EmailJS, deployment on Vercel, and performance
                    optimization.
                </p>
            </div>

            <div className="assessment-card">

                <h4>Assessment Results</h4>

                <div className="assessment-grid">

                    <div className="assessment-item">
                        <h5>🚀 Motivated</h5>
                        <p>I enjoy setting goals and consistently working toward them.</p>
                    </div>

                    <div className="assessment-item">
                        <h5>💪 Assertive</h5>
                        <p>I take initiative and feel comfortable making decisions.</p>
                    </div>

                    <div className="assessment-item">
                        <h5>🤝 Extroverted</h5>
                        <p>I enjoy collaborating and communicating with teammates.</p>
                    </div>

                    <div className="assessment-item">
                        <h5>🏆 Competitive</h5>
                        <p>I continuously challenge myself to improve my skills and deliver better results.</p>
                    </div>

                </div>

                <a
                    href="/professional-assessment/professional-assessment.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="assessment-btn"
                >
                    View Assessment Report 
                    <FiExternalLink/>
                </a>

            </div>

            <div className="journey-footer" >
                <h2>Thank You for Reading</h2>
                <p>
                    I'm still learning every day and looking forward to contributing to real-world projects,
                    collaborating with talented developers, and continuously improving my skills.
                </p>
            </div>

            <Link href="/" className="back-btn">
                ← Back to Portfolio
            </Link>

        </section>
    )
}