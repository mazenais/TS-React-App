import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     authenticate().onAuthStateChanged((user) => {
    //         setUser(user)
    //     });
    // }, [])

    const register = async ({ email, password, name }) => {
         const res = await fetch("http://localhost:5000/api/users/register", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json(user);
      return data;
  };


   const login = async ({ email, password }) => {
    const res = await fetch(`http://localhost:5000/api/users/login`, {
    method: "post",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(JSON.stringify(res.data));
  if (res.status !== 401)
    return res.json().then((data) => data);

  else
    return { isAuthenticated: false, user: { username: "", name: "" } };
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

