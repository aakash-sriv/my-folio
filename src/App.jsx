import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>      
      <NavBar />
      
      {/* Wrap each component in a section with matching ID */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App