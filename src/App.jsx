import { FaGithub, FaLinkedin } from "react-icons/fa";

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container mx-auto flex max-w-7xl flex-col gap-6 p-4">
      <h1 className="bg-gradient-to-t from-orange-500 to-orange-300 bg-clip-text p-2 text-center text-4xl font-bold text-transparent sm:text-6xl">
        Daniel Rodriguez
      </h1>
      {/* Social networks */}
      <div className="flex flex-row items-center justify-center gap-4">
        <a
          className="flex items-center justify-center rounded-full border p-2 text-orange-400"
          href="https://www.linkedin.com/in/dfrodriguez45/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          className="flex items-center justify-center rounded-full border p-2 text-orange-400"
          href="https://github.com/dfrodriguez45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {/* About me */}
        <AboutMe />
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Experience */}

        <img
          src="footer.webp"
          alt="Sleeping fox"
          className="col-span-2 mx-auto w-1/2"
          width={1024}
          height={1024}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default App;
