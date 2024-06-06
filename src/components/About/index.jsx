export default function About() {
  return (
    <section className="group col-span-1 flex h-full items-center justify-center rounded-lg shadow-lg [perspective:1000px] sm:col-span-4 md:col-span-2">
      <div className="relative size-full transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex size-full flex-col flex-nowrap items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-tl from-slate-50/10 backdrop-blur-sm">
          <h2 className="text-center text-6xl font-bold text-white">
            Sobre mí
          </h2>
          <img
            src="/Astro.svg"
            alt="Astro"
            className="absolute -bottom-10 -left-32 -z-10 size-96"
          />
        </div>
        <div className="flex size-full flex-col flex-nowrap justify-evenly gap-4 rounded-lg bg-black/85 p-6 text-white backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-10">
          <span className="flex flex-col flex-nowrap gap-4">
            <h1 className="text-5xl font-bold">
              Daniel Fernando Rodriguez Morales
            </h1>
            <p className="bg-gradient-to-t from-blue-500 to-sky-500 bg-clip-text text-xl font-bold italic text-transparent">Software Engineer</p>
          </span>
          <hr className="w-1/2 border-t border-gray-300" />
          <p className="text-justify text-lg">
            Soy Ingeniero en Software con una sólida formación en tecnologías de
            información y especialización en el desarrollo web y móvil. Con
            experiencia en metodologías ágiles y un enfoque en el desarrollo de
            soluciones innovadoras, disfruto trabajando en proyectos que me
            desafían a adoptar nuevas tecnologías y expandir mis habilidades.
          </p>
        </div>
      </div>
    </section>
  );
}
