import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Button } from 'react-bootstrap';
interface Props {

}

const Register = (props: Props) => {
  const [state, setState] = useState({ email: "", password: "", name: "" });

  const { register }  = useContext(AuthContext);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    register(state);
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
      <h3>Please fill in this form:</h3>
      <label htmlFor="name" className="sr-only">
        name:
      </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Name"
          value={state.name}
        />
      
      <label htmlFor="email" className="sr-only">
        email:
      </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Email"
          value={state.email}
        />
      
      <label htmlFor="password" className="sr-only">
        password: 
      </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Password"
          value={state.password}
        />
      
      <div>
        <Button className="submit_button" type="submit">
          Submit
        </Button>
      </div>
    </form>
  </div>
  );
};

export default Register;
