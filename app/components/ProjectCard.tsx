
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink, HiOutlineEye } from "react-icons/hi";
import { Project } from "@/data/projects";

type Props = {
    project: Project;
    reverse?: boolean;
};

export default function ProjectCard({ project, reverse = false }: Props) {
    return (
        <article className={`project-card ${reverse ? "reverse" : ""}`}>

            <div className="project-image">

                <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={450}
                />

                <div className="project-overlay">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="preview-btn"
                    >
                        <HiOutlineEye />
                        View Project
                    </a>
                </div>

            </div>

            <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                    {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                <div className="project-buttons">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-btn"
                    >
                        <HiOutlineExternalLink />
                        Live Demo
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-btn"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                </div>
            </div>
        </article>
    );
}