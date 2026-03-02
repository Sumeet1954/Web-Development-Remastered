import React, { createContext, useContext, useState } from "react";

/* Create Context */
const GlobalContext = createContext();

/* Provider Component */
export const GlobalProvider = ({ children }) => {
  const [cartState, setCartState] = useState(0);

  return (
    <GlobalContext.Provider value={{ cartState, setCartState }}>
      {children}
    </GlobalContext.Provider>
  );
};

/* Custom Hook */
export const useGlobal = () => {
  return useContext(GlobalContext);
};
