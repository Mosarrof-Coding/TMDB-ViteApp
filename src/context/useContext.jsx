import { createContext, useState } from "react";

export const UseContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [value, setValue] = useState("Hello, Context!");

  return (
    <UseContext.Provider value={{ value, setValue }}>
      {children}
    </UseContext.Provider>
  );
};
