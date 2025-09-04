import { ProjectCard } from './ProjectCard'
import { Link } from 'react-router-dom';

const projects = [
    {
    title: "Sudoku Solver",
    description: "Solves sudoku puzzles visullay using a bruteforce backtracking algorithm.",
    image: `${import.meta.env.BASE_URL}/SudokuSolver.png`,
    github: "https://github.com/rganesh03/sudokuSolver",
    demo: "https://rganesh03.github.io/sudokuSolver"
  },
  {
    title: "Planetary Physics Simulator",
    description: "Simple planetary physics model simulation built using C.",
    image: `${import.meta.env.BASE_URL}/PlanetarySim.png`,
    github: "https://github.com/rganesh03/Planetary-Physics-Sim",
    // demo: ""
  },
];

function ProjectPage() {
    return ( 
        
        <section className="projects-page">
            <Link to="/" className="btn">Home</Link>
            <h2 className='project-title'>My Projects</h2>
            <div className="projects-grid">
                {projects.map((proj) => (
                    <ProjectCard key={proj.title} { ...proj} />
                ))}
            </div>
        </section>
    );
}

export default ProjectPage;