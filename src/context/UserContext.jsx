import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { v4 } from "uuid";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  const signUser = (newUser) => {
    // kullanici'a id ekler
    newUser.id = v4();
    // kullaniciyi lokale aktarir
    localStorage.setItem("user", JSON.stringify(newUser));
    // state gunceller
    setUser(newUser);
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  return (
    <UserContext.Provider value={{ user, signUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
