import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import qs from 'qs';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //     authenticate().onAuthStateChanged((user) => {
  //         setUser(user)
  //     });
  // }, [])

  const register = async ({ email, password, name }) => {
    const res = await fetch("http://localhost:5000/api/profile/register", {
      method: "post",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json(user);
    return data;
  };

  const login = async ( data ) => {
    console.log('data :>> ', data);
    const res = await axios( {
      method: "post",
      url: 'http://localhost:5000/api/profile/login',
      data: qs.stringify(data),
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
      },
    });
    console.log(res);
    if (res.status == 200) {
      localStorage.setItem("token", res.data.token)
      setUser(res.data.user);
    }
    else return {  user: { username: "", name: "" } };
  };

  // const logout = () => {
  //     return fetch("http://localhost:5000/api/users/logout")
  //       .then((res) => res.json())
  //       .then((data) => data);
  // }

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
