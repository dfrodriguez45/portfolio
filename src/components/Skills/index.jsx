function Skills() {
  return (
    <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800 lg:col-span-1">
      <h2 className="text-center text-2xl font-bold">Habilidades</h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-6">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          className="size-10 lg:size-20"
          alt="HTML5 icon"
          loading="lazy"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          className="size-10 lg:size-20"
          alt="CSS3 icon"
          loading="lazy"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          className="size-10 lg:size-20"
          alt="JavaScript icon"
          loading="lazy"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          className="size-10 lg:size-20"
          alt="React icon"
          loading="lazy"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          className="size-10 lg:size-20"
          alt="Node.js icon"
          loading="lazy"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          className="size-10 lg:size-20"
          alt="Firebase icon"
          loading="lazy"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          className="size-10 lg:size-20"
          alt="MySQL icon"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Skills;
