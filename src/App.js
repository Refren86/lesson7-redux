import React, { createContext, useState } from "react";

import { Layout } from "./components";

export const ThemeContext = createContext(null);

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        <Layout />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
