import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

function Projects() {
  return (
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
            src="/projects/api-client-fortnite.webp"
            alt="api-client-fortnite"
            className="min-h-96 w-full object-cover"
            width={1733}
            height={863}
            loading="lazy"
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
              alt="Vite.js icon"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              className="size-6 md:size-10"
              alt="React icon"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              className="size-6 md:size-10"
              alt="Tailwind CSS icon"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="/projects/centinela-universal-web.webp"
            alt="centinela-universal-web"
            className="min-h-96 w-full object-cover"
            width={1733}
            height={863}
            loading="lazy"
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
              alt="Vite.js icon"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              className="size-6 md:size-10"
              alt="React icon"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              className="size-6 md:size-10"
              alt="Tailwind CSS icon"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="/projects/adeline-site.webp"
            alt="centinela-universal-web"
            className="min-h-96 w-full object-cover"
            width={1733}
            height={863}
            loading="lazy"
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
              alt="Astro icon"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              className="size-6 md:size-10"
              alt="React icon"
              loading="lazy"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              className="size-6 md:size-10"
              alt="Tailwind CSS icon"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
