import TopNav from './components/topNav.jsx';
import Education from './components/education.jsx';
import Landing from './components/landing.js';
import Experience from './components/Experience.js';
import Skills from './components/skills.js';
import Project from './components/project.js';
import Contact from './components/contact.js';

/*
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
<BrowserRouter>
      <Link to ="/home">Home</Link>
      <Link to ="/education">Education</Link>

    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/education" element={<Education/>}/>
    </Routes>

    </BrowserRouter>*/

function App() {
  return (
    <>
    
    <TopNav/>

    <section id="landing">
      <Landing/>
    </section>

    <section id="experience">
      <Experience/>
    </section>

    <section id="education">
      <Education/>
    </section>

    <section id="project">
      <Project/>
    </section>
    

    <section id="skills">
      <Skills/>
    </section>

    <section id="contact">
      <Contact/>
    </section>
    </>
    
  );
}

export default App;