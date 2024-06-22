import { useContext } from "react";

import { LanguagesContext } from "../../contexts/LanguagesContext";
import { aboutMe } from "../../constants/aboutMe";

function AboutMe() {
  const { language } = useContext(LanguagesContext);

  return (
    <div className="col-span-2 flex flex-col gap-4 rounded-lg bg-white p-6 text-slate-800 lg:col-span-1">
      <h2 className="text-center text-2xl font-bold">
        {aboutMe[language].title}
      </h2>
      <p className="text-lg">{aboutMe[language].description}</p>
    </div>
  );
}

export default AboutMe;
