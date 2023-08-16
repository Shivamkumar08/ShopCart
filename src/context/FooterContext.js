import React, { createContext, useContext } from "react";

const FooterContext = createContext();

export const FooterProvider = ({ children }) => {
  const footerLinks = [
    { text: "Twitter", url: "https://twitter.com/shibu_perfect" },
    { text: "LinkedIn", url: "https://www.linkedin.com/in/shivam-kumar-037943184/" },
    { text: "GitHub", url: "https://github.com/Shivamkumar08" }
  ];

  return (
    <FooterContext.Provider value={{ footerLinks }}>
      {children}
    </FooterContext.Provider>
  );
};

export const useFooter = () => useContext(FooterContext);
