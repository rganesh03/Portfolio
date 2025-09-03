import { ProjectCard } from './ProjectCard'
import { Link } from 'react-router-dom';

const projects = [
    {
    title: "Sudoku Solver",
    description: "Solves puzzles using backtracking.",
    image: "/SudokuSolver.png",
    github: "https://github.com/rganesh03/sudokuSolver",
    demo: "https://rganesh03.github.io/sudokuSolver"
  },
  {
    title: "Sudoku Solver",
    description: "Solves puzzles using backtracking.",
    image: "/SudokuSolver.png",
    github: "https://github.com/rganesh03/sudokuSolver",
    demo: "https://rganesh03.github.io/sudokuSolver"
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