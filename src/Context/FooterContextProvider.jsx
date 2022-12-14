import React, { createContext } from "react";
import data from "../db.json";

const FooterContext = createContext(null);

const FooterContextProvider = ({ children }) => {
  const footerData = data.footer.data;

  return <FooterContext.Provider value={{ footerData }}>{children}</FooterContext.Provider>;
};

export default FooterContextProvider;
export {FooterContext};