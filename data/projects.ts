
export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "E-Shop",
        description:
            "A modern e-commerce website built with Next.js featuring product search, category filtering, shopping cart, local storage, and a responsive user interface.",
        image: "/images/projects/e-shop.jpg",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "CSS3",
            "JavaScript",
        ],
        github: "https://github.com/Draoui-Haroun/e-shop",
        demo: "https://e-shop-one-flax.vercel.app/",
    },

    {
        id: 2,
        title: "Symphony",
        description:
            "My personal portfolio built with Next.js to showcase my projects, skills, and frontend development journey.",
        image: "/images/projects/symphony.jpg",
        technologies: [
            "HTML5",
            "JavaScript",
            "CSS3",
        ],
        github: "https://github.com/Draoui-Haroun/Symphony",
        demo: "https://draoui-haroun.github.io/Symphony/",
    },
];

export default projects;
