import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col gap-6 p-4 max-w-7xl mx-auto bg-gray-900 text-white">
      <h1 className="text-4xl text-center sm:text-6xl font-bold bg-clip-text bg-gradient-to-t from-orange-500 to-orange-300 text-transparent p-2">
        Daniel Rodriguez
      </h1>
      <div className="flex flex-row gap-4 items-center justify-center">
        <a
          className="flex items-center justify-center bg-white text-orange-400 rounded-full p-2"
          href="https://www.linkedin.com/in/dfrodriguez45/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          className="flex items-center justify-center bg-white text-orange-400 rounded-full p-2"
          href="https://github.com/dfrodriguez45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-6 text-slate-800">
          <h2 className="text-2xl font-bold text-center">Sobre mí</h2>
          <p className="text-lg">
            Soy Ingeniero en Software con una sólida formación en tecnologías de
            información y especialización en el desarrollo web. Con experiencia
            en metodologías ágiles y un enfoque en el desarrollo de soluciones
            innovadoras, disfruto trabajando en proyectos que me desafían a
            adoptar nuevas tecnologías y expandir mis habilidades.
          </p>
          <h2 className="text-lg font-bold text-center">Habilidades</h2>
          <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              className="size-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              className="size-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              className="size-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="size-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              className="size-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              className="size-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              className="size-10"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-6 text-slate-800">
          <h2 className="text-2xl font-bold text-center">Proyectos</h2>
          <ul className="flex flex-col gap-4">
            <li className="relative overflow-hidden rounded-lg">
              <img
                src="/projects/api-client-fortnite.jpeg"
                alt="api-client-fortnite"
                className="w-full h-auto object-cover"
              />
              <div className="absolute flex items-center justify-between gap-2 bg-black/70 text-white font-bold bottom-10 md:bottom-14 w-full p-4">
                <span className="md:text-lg">Tienda de Fortnite</span>
                <div className="flex gap-2">
                  <a
                    href="https://api-client-fortnite.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                  <a
                    href="https://github.com/dfrodriguez45/fortnite-store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
              <div className="flex flex-row gap-2 bg-gray-800 p-2 items-center justify-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  className="size-6 md:size-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="size-6 md:size-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="size-6 md:size-10"
                />
              </div>
            </li>
            <li className="relative overflow-hidden rounded-lg">
              <img
                src="/projects/centinela-universal-web.jpeg"
                alt="centinela-universal-web"
                className="w-full h-auto object-cover"
              />
              <div className="absolute flex items-center justify-between gap-2 bg-black/70 text-white font-bold bottom-10 md:bottom-14 w-full p-4">
                <span className="md:text-lg">Centinela Universal Web</span>
                <div className="flex gap-2">
                  <a
                    href="https://centinela-universal-acff4.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
              <div className="flex flex-row gap-2 bg-gray-800 p-2 items-center justify-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  className="size-6 md:size-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="size-6 md:size-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="size-6 md:size-10"
                />
              </div>
            </li>
            <li className="relative overflow-hidden rounded-lg">
              <img
                src="/projects/adeline-site.jpeg"
                alt="centinela-universal-web"
                className="w-full h-auto object-cover"
              />
              <div className="absolute flex items-center justify-between gap-2 bg-black/70 text-white font-bold bottom-10 md:bottom-14 w-full p-4">
                <span className="md:text-lg">Adeline Salón de Belleza</span>
                <div className="flex gap-2">
                  <a
                    href="https://adeline-site.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                  <a
                    href="https://github.com/dfrodriguez45/adeline-site"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
              <div className="flex flex-row gap-2 bg-gray-800 p-2 items-center justify-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg"
                  className="size-6 md:size-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="size-6 md:size-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="size-6 md:size-10"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-6 text-slate-800">
          <h2 className="text-2xl font-bold text-center">Experiencia</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
