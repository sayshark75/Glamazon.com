import { createContext } from "react";
import data from "../db.json";

const NavbarContext = createContext(null);

const NavbarContextProvider = ({ children }) => {
  const navData = data.navbar;

  return <NavbarContext.Provider value={{ navData }}>{children}</NavbarContext.Provider>;
};

export default NavbarContextProvider;
export { NavbarContext };
