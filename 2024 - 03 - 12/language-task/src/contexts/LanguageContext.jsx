import { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext();

function LanguageContextProvider({children}) {
  // Declare state variable with initial value "DE"
    const [currentLanguage, setCurrentLanguage]=useState("DE");
  return (
    <LanguageContext.Provider value={{currentLanguage, setCurrentLanguage}}>{children}</LanguageContext.Provider>
  )
}

export default LanguageContextProvider