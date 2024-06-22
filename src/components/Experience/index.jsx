import { useContext } from "react";

import { experiences } from "../../constants/experiences";
import { LanguagesContext } from "../../contexts/LanguagesContext";

function Experience() {
  const { language } = useContext(LanguagesContext);

  return (
    <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800">
      <h2 className="text-center text-2xl font-bold">
        {experiences[language].title}
      </h2>
      <ul className="w-full border-l">
        {experiences[language].list.map((experience, index) => {
          return (
            <li key={index} className="relative w-full p-6">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <div className="absolute -left-1.5 top-7 size-3 rounded-full bg-gray-400 md:top-14" />
                  <h3 className="text-lg font-bold">{experience.title}</h3>
                  <p className="font-medium italic">{experience.company}</p>
                  <p className="font-light">{experience.date}</p>
                </div>
                <img
                  src={experience.img.src}
                  alt={experience.img.alt}
                  className="w-3/4 md:w-1/3"
                  width={experience.img.width}
                  height={experience.img.height}
                  loading="lazy"
                />
              </div>
              <ul className="mt-4 list-inside list-disc">
                {experience.tasks.map((task, index) => {
                  return (
                    <li key={index} className="list-item">
                      {task}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
