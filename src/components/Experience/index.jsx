export default function Experience() {
  return (
    <section className="group col-span-1 flex h-full items-center justify-center rounded-lg shadow-lg [perspective:1000px] sm:col-span-4 md:col-span-2">
      <div className="relative size-full transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex size-full flex-col flex-nowrap items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-tl from-slate-50/10 backdrop-blur-sm">
          <h2 className="text-center text-4xl font-bold text-white md:text-6xl">
            Experiencia
          </h2>
          <img
            src="/Experiments.svg"
            alt="Astro"
            className="absolute -bottom-10 right-0 -z-10 size-96"
          />
        </div>
        <div className="flex size-full flex-col flex-nowrap justify-evenly gap-4 rounded-lg bg-black/85 p-6 text-white backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-10">
          <div className="flex flex-col flex-nowrap gap-2 rounded-lg border p-4">
            <img src="/Experience/0.png" alt="Perla Technology" width={350} />
            <h3 className="text-2xl font-bold">Fullstack Developer</h3>
            <p>Remoto, Colombia</p>
            <p className="text-lg italic">Jul. 2022 - Dic. 2023</p>
          </div>

          <div className="flex flex-col flex-nowrap gap-2 rounded-lg border p-4">
            <img
              src="/Experience/1.svg"
              alt="SoftwareOne Colombia"
              width={350}
            />
            <h3 className="text-2xl font-bold">Software Engineer</h3>
            <p className="font-light">Remoto, Colombia</p>
            <p className="text-lg italic">Abr. 2023 - Oct. 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}
