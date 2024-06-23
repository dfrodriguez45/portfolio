import { PropTypes } from "prop-types";
import { useState } from "react";

import { LanguagesContext } from "./LanguagesContext";

function LanguagesProvider({ children }) {
  const [language, setLanguage] = useState("es");

  function handleSetLanguage() {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  }

  return (
    <LanguagesContext.Provider value={{ language, handleSetLanguage }}>
      {children}
    </LanguagesContext.Provider>
  );
}

LanguagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguagesProvider;
