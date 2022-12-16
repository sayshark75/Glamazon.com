import React, { createContext, useState } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [auth,setAuth] = useState(false);
  const [Authuser,setUsername] = useState("");

  return <AuthContext.Provider value={{ auth,setAuth,Authuser,setUsername }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
export {AuthContext};
