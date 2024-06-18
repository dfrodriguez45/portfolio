import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import AboutMe from "./components/AboutMe";
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
        <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800">
          <h2 className="text-center text-2xl font-bold">Proyectos</h2>
          {/* Swiper */}
          <Swiper
            modules={[Pagination, Autoplay]}
            direction="horizontal"
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
                    href="https://fortnite-store.vercel.app/"
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
          <h2 className="text-center text-2xl font-bold">Experiencia</h2>
          <ul className="w-full border-l">
            <li className="relative w-full p-6">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <div className="absolute -left-1.5 top-7 size-3 rounded-full bg-gray-400 md:top-14" />
                  <h3 className="text-lg font-bold">Desarrollador Fullstack</h3>
                  <p className="font-medium italic">Perla Technology</p>
                  <p className="font-light">jul. 2022 - dic. 2023</p>
                </div>
                <img
                  src="experience/perla-technology.png"
                  alt="Perla Technology"
                  className="w-3/4 md:w-1/3"
                />
              </div>
              <ul className="mt-4 list-inside list-disc">
                <li className="list-item">
                  Participar en reuniones para discutir requisitos y progreso
                  del proyecto.
                </li>
                <li className="list-item">
                  Configurar Firebase para autenticación, base de datos y
                  funciones en la nube.
                </li>
                <li className="list-item">
                  Convertir la interfaz móvil a una aplicación web usando React.
                </li>
                <li className="list-item">
                  Integrar la aplicación web con Firebase para autenticación y
                  base de datos.
                </li>
                <li className="list-item">
                  Identificar y corregir errores durante el desarrollo y las
                  pruebas.
                </li>
                <li className="list-item">
                  Desplegar la aplicación web en el servicio de hosting de
                  Firebase.
                </li>
                <li className="list-item">
                  Monitorear el rendimiento, corregir errores y mejorar la
                  aplicación.
                </li>
                <li className="list-item">
                  Escribir documentación para facilitar la comprensión y
                  mantenimiento del código.
                </li>
              </ul>
            </li>
            <li className="relative w-full p-6">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <div className="absolute -left-1.5 top-7 size-3 rounded-full bg-gray-400 md:top-14" />
                  <h3 className="text-lg font-bold">
                    Aprendiz Desarrollador de Software
                  </h3>
                  <p className="font-medium italic">SoftwareOne Colombia</p>
                  <p className="font-light">abr. 2023 - oct. 2023</p>
                </div>
                <img
                  src="experience/softwareone.png"
                  alt="SoftwareOne Colombia"
                  className="w-3/4 md:w-1/3"
                />
              </div>
              <ul className="mt-4 list-inside list-disc">
                <li className="list-item">
                  Participar en reuniones diarias de Scrum (Daily) para
                  coordinar tareas.
                </li>
                <li className="list-item">
                  Revisar y comprender los requisitos del cliente para los
                  nuevos componentes.
                </li>
                <li className="list-item">
                  Diseñar componentes React basados en los requisitos del
                  cliente.
                </li>
                <li className="list-item">
                  Escribir código de componentes React con reutilización.
                </li>
                <li className="list-item">
                  Realizar pruebas unitarias y de integración para los nuevos
                  componentes.
                </li>
                <li className="list-item">
                  Integrar los nuevos componentes en la aplicación existente.
                </li>
                <li className="list-item">
                  Revisar el código con el equipo para asegurar calidad y
                  cumplimiento de estándares.
                </li>
                <li className="list-item">
                  Desplegar y probar los componentes en un entorno de
                  desarrollo.
                </li>
                <li className="list-item">
                  Participar en reuniones de Sprint Review para presentar los
                  avances al cliente y obtener feedback.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <img
          src="footer.png"
          alt="Zorro durmiendo"
          className="col-span-2 mx-auto w-1/2"
        />
      </div>
    </div>
  );
}

export default App;
