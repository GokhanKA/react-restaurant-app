import React, { useState, useEffect } from "react";
import Firebase from "../firebase/firebase.utils";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    checkUser();
  }, []);

  const [user, setUser] = useState(null);
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

  const checkUser = () => {
    setUser(Firebase.checkUserAuth);
    console.log(user);
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
    <AuthContext.Provider
      value={{ user, login, isLogin, setIsLogin, logout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
