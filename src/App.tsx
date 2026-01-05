import AboutMe from "./components/AboutMe"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technology from "./components/Technology"

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <Technology />
        <Education />
      </main>
      <Footer />

    </div>
  )
}

export default App
