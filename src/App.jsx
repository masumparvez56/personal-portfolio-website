import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {

  return (
    <div className="bg-[#050414]">
      <div className="relative pt-20">
        <Navbar />
        <Home />
        <About />
        <Skills />
         <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App

