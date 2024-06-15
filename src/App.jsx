import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
        <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800 lg:col-span-1">
          <h2 className="text-center text-2xl font-bold">Sobre mí</h2>
          <p className="text-lg">
            Soy Ingeniero en Software con una sólida formación en tecnologías de
            información y especialización en el desarrollo web. Con experiencia
            en metodologías ágiles y un enfoque en el desarrollo de soluciones
            innovadoras, disfruto trabajando en proyectos que me desafían a
            adoptar nuevas tecnologías y expandir mis habilidades.
          </p>
        </div>
        {/* Skills */}
        <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800 lg:col-span-1">
          <h2 className="text-center text-2xl font-bold">Habilidades</h2>
          <div className="flex flex-row flex-wrap items-center justify-center gap-6">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              className="size-10 lg:size-20"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              className="size-10 lg:size-20"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              className="size-10 lg:size-20"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="size-10 lg:size-20"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              className="size-10 lg:size-20"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              className="size-10 lg:size-20"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              className="size-10 lg:size-20"
            />
          </div>
        </div>
        {/* Projects */}
        <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800">
          <h2 className="text-center text-2xl font-bold">Proyectos</h2>
          {/* Swiper */}
          <Swiper
            modules={[Pagination, Autoplay]}
            direction={"horizontal"}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            className="w-full overflow-hidden rounded-lg border pb-6"
            slidesPerView={1}
          >
            <SwiperSlide className="relative">
              <img
                src="/projects/api-client-fortnite.jpeg"
                alt="api-client-fortnite"
                className="min-h-96 w-full object-cover"
              />
              <div className="absolute bottom-10 flex w-full items-center justify-between gap-2 bg-black/70 p-4 font-bold text-white md:bottom-14">
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
              <div className="flex flex-row items-center justify-center gap-2 bg-gray-800 p-2">
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
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src="/projects/centinela-universal-web.jpeg"
                alt="centinela-universal-web"
                className="min-h-96 w-full object-cover"
              />
              <div className="absolute bottom-10 flex w-full items-center justify-between gap-2 bg-black/70 p-4 font-bold text-white md:bottom-14">
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
              <div className="flex flex-row items-center justify-center gap-2 bg-gray-800 p-2">
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
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src="/projects/adeline-site.jpeg"
                alt="centinela-universal-web"
                className="min-h-96 w-full object-cover"
              />
              <div className="absolute bottom-10 flex w-full items-center justify-between gap-2 bg-black/70 p-4 font-bold text-white md:bottom-14">
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
              <div className="flex flex-row items-center justify-center gap-2 bg-gray-800 p-2">
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
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Experience */}
        <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800">
          <h2 className="text-2xl font-bold text-center">Experiencia</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
