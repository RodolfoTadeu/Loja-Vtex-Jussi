import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [repositories, setRepositories] = useState([]);

  const context = {
    repositories,
    setRepositories,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

//custom hook
export const useRepositories = () => useContext(DataContext);
