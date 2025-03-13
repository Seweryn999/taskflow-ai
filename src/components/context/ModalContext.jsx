import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isRegisterOpen, setRegisterOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
