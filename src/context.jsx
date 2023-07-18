import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [navLoginReg, setNavLoginReg] = useState(false);

  return (
    <AppContext.Provider value={{ navLoginReg, setNavLoginReg }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContent = () => {
  return useContext(AppContext);
};
