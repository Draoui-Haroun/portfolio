
import "../styles/projects.css";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section className="projects" id="projects">

            <h2 className="section-title">
                Featured Projects
            </h2>

            <p className="section-description">
                Here are some of the projects I've built while learning and improving my frontend development skills.
            </p>

            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    reverse={index % 2 !== 0}
                />
            ))}

        </section>
    );
}