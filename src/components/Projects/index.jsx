import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { projects } from "../../constants/projects";

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
          delay: 5000,
        }}
        className="w-full overflow-hidden rounded-lg border pb-6"
        slidesPerView={1}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index} className="relative">
              <img
                src={project.img.src}
                alt={project.img.alt}
                className="min-h-96 w-full object-cover"
                width={project.img.width}
                height={project.img.height}
                loading="lazy"
              />
              <div className="absolute bottom-10 flex w-full items-center justify-between gap-2 bg-black/70 p-4 font-bold text-white md:bottom-14">
                <span className="md:text-lg">{project.title}</span>
                <div className="flex gap-2">
                  {project.links.map((link, index) => {
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <link.icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 bg-gray-800 p-2">
                {project.technologies.map((technology, index) => {
                  return (
                    <img
                      key={index}
                      src={technology.icon}
                      className="size-6 md:size-10"
                      alt={technology.alt}
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Projects;
