import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import {Box} from '@chakra-ui/react'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {

  return (
    <Box>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </Box>
  )
}

export default App
