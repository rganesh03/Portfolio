import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/Front';
import AboutMe from './components/AboutMe';
import ProjectPage from './components/ProjectPage';
import './index.css';

function App() {
  return (
    <Router basename='/Portfolio'>
      <div className="app">
        <Routes>
          <Route path="/" element={ <> <HeroSection /> <AboutMe /> </>} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;