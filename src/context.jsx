import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [navRegInput, setNavRegInput] = useState(false);

  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const [phoneCodeInput, setPhoneCodeInput] = useState("");
  const [regInputs, setRegInputs] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <AppContext.Provider
      value={{
        navRegInput,
        setNavRegInput,
        loginInputs,
        setLoginInputs,
        regInputs,
        setRegInputs,
        phoneCodeInput,
        setPhoneCodeInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContent = () => {
  return useContext(AppContext);
};
