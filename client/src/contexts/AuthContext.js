import React from "react";
const AuthContext = React.createContext({
  user: null,
  isLogged: false,
  logIn: () => {},
  logOut: () => {}
});

export default AuthContext;
