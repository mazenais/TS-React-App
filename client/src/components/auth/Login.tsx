import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface Props {}

const Login = (props: Props) => {
  const [state, setState] = useState({ email: "", password: "" });

  const { login } = useContext(AuthContext);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    login(state);
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
        <button className="return_button" onClick={handleHistory}>
          back
        </button>
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
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
