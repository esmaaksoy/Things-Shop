import {createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null);
  const navigate = useNavigate();
  const login = (info) => {
    setUser(info);
    navigate("/dashboard");
  };
  // kullanıcı logout buttonuna tıkladıktan sonra geri okuna bastığında içeri giriyordu. Bunu engellemek için user değişkenini sıfırladım
  const logout= ()=>{
    setUser(null)
  }
  //kullanıcı sayfayı refresh yaptığında tekrar login sayfasına dönüyordu bunu engellemek için sessionStorage kullandım
  useEffect(()=>{
    sessionStorage.setItem("user", JSON.stringify(user))
  },[user])
  return (
    <AuthContext.Provider value={{ user, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
