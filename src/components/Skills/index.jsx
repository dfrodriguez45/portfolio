import { useContext } from "react";

import { skills } from "../../constants/skills";
import { LanguagesContext } from "../../contexts/LanguagesContext";

function Skills() {
  const { language } = useContext(LanguagesContext);

  return (
    <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800 lg:col-span-1">
      <h2 className="text-center text-2xl font-bold">
        {skills[language].title}
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-6">
        {skills[language].list.map((skill, index) => {
          return (
            <img
              key={index}
              src={skill.icon}
              className="size-10 lg:size-20"
              alt={skill.alt}
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
