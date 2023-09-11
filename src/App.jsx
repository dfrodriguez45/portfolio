import AboutMe from "./components/AboutMe/AboutMe"
import Experience from "./components/Experience/Experience"
import MainLayout from "./components/MainLayout/MainLayout"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {

  return (
    <>
      <MainLayout>
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
      </MainLayout>
    </>
  )
}

export default App
