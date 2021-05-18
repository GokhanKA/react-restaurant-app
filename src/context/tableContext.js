import React, { useState, useEffect } from "react";
import Firebase from "../firebase/firebase.utils";
import { useHistory } from "react-router-dom";

export const TableContext = React.createContext();

const TableProvider = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    checkUser();
  }, []);

  const [table, setTable] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  const signup = (email, password) => {
    Firebase.signupWithEmail(email, password).then(() => {
      Firebase.loginWithEmail(email, password);
      setIsLogin(true);
      history.push("/tables");
    });
  };

  const login = (email, password) => {
    Firebase.loginWithEmail(email, password)
      .then(() => {
        setIsLogin(true);
        history.push("/tables");
      })
      .catch((err) => alert(err.message));
  };

  
  const logout = () => {
    if (isLogin) {
      Firebase.signOut().then(() => {
        setIsLogin(false);
        history.push("/");
      });
    }
  };

  return (
    <TableContext.Provider
      value={{ login, isLogin, setIsLogin, logout, signup }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
