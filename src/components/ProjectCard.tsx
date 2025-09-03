interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    github ?: string;
    demo ?: string;
}

export const ProjectCard = ({ title, description, image, github, demo }: ProjectCardProps) => (
    <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="links">
            {github && <a href={github}>Github</a>}
            {demo && <a href={demo}>Live Demo </a>}
        </div>
    </div>
);