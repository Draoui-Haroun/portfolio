
import Link from "next/link";
import "./journey.css"


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

            <div className="chapter">
                <h2>chapter 5: Today</h2>
                <h3>Where I Am Today</h3>
                <p>
                    Today, I am a Frontend Developer with a strong foundation in modern web
                    technologies. Alongside my Mechanical Engineering studies, I continue to
                    improve my programming skills by building practical projects, exploring
                    new technologies, and applying best practices in web development.
                </p>
                <h3>What I've Learned</h3>
                <p>
                   Throughout this journey, I learned that consistent practice is the fastest way
                    to improve. Discipline is more valuable than motivation because it keeps me
                    moving forward even when progress feels slow. I also developed strong
                    problem-solving skills by breaking complex challenges into smaller, manageable
                    steps and finding logical solutions. I discovered that challenges and difficult
                    moments are part of the learning process—sometimes, the pain is the progress.
                    Every obstacle became an opportunity to learn, improve, and become a better
                    developer. 
                </p>
            </div>

            <div className="chapter">
                <h2>chapter 6: What's Next</h2>
                <h3>Real-World Projects & Career Goals</h3>
                <p>
                    My next goal is to gain professional experience through internships and
                    real-world projects where I can collaborate with experienced developers,
                    contribute to meaningful products, and continue expanding my technical
                    knowledge. I aim to become a skilled Frontend Developer while gradually
                    learning backend technologies to grow into a well-rounded software engineer.
                </p>
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