import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios, { Method } from 'axios';
import { Button } from "react-bootstrap";

interface Props {
    token: string
}
interface config {
    method: Method,
    headers: any

}


const Login = (props: Props) => {
  const [state, setState] = useState({ email: "", password: "" });

  const { login } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchItems = async () => {
        

//         const token = localStorage.getItem('token')
//         const config: config = {
//             method : 'get', 
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         };
//         const result = await axios('http://localhost:5000/api/users/6182c993f2724e1c0747f2e1', config);

//         console.log(result.data);
       
//     };
//     fetchItems();
// }, [])

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();   
   
    login(state);
    localStorage.setItem("token", props.token);
  };
  console.log("state", state);

  const history = useHistory();
  const handleHistory = () => {
    history.push("/");
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <Button className="return_button" onClick={handleHistory}>
          back
        </Button>
      </div>
        <h3>Please sign in</h3>
        <label htmlFor="email" className="sr-only">
          Email:
        </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Email"
        />
        <label htmlFor="password" className="sr-only">
          Password:
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Password"
        />
        <Button className="btn btn-primary btn-block" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
