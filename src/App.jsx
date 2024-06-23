import { useContext } from "react";
import { FaGithub, FaLanguage, FaLinkedin } from "react-icons/fa";

import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { LanguagesContext } from "./contexts/LanguagesContext";

function App() {
  const { handleSetLanguage } = useContext(LanguagesContext);

  return (
    <div className="container relative mx-auto flex max-w-7xl flex-col gap-6 p-4">
      <button
        type="button"
        title="Change language"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-orange-500 p-2 text-white md:bottom-8 md:right-8 dark:bg-blue-500"
        onClick={handleSetLanguage}
      >
        <FaLanguage size={32} />
      </button>
      <h1 className="bg-gradient-to-t from-orange-500 to-orange-300 bg-clip-text p-2 text-center text-4xl font-bold text-transparent sm:text-6xl dark:from-blue-500 dark:to-blue-700">
        Daniel Rodriguez
      </h1>
      {/* Social networks */}
      <div className="flex flex-row items-center justify-center gap-4">
        <a
          className="flex items-center justify-center rounded-full border p-2 text-orange-500 dark:border-slate-600 dark:text-blue-500"
          href="https://www.linkedin.com/in/dfrodriguez45/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          className="flex items-center justify-center rounded-full border p-2 text-orange-500 dark:border-slate-600 dark:text-blue-500"
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
        <Experience />
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
