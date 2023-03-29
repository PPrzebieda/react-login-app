import { useState } from "react";
import React from "react";

const LoginComponent = (props) => {
  const userData = props.parentToChild;

  const initialUser = { username: "", password: "" };
  const [newUser, setNewUser] = useState(initialUser);
  const [loginCheck, setLogin] = useState(true);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginCheck = userData.some((login) => {
      return (
        login.username === newUser.username &&
        login.password === newUser.password
      );
    });
    setLogin(loginCheck);

    if (loginCheck == true) {
      console.log("Sucess!");
      props.actualUser(newUser.username);
      props.visibleChild(3);
    } else {
      console.log("No sucess :(");
    }
    props.childToParent(userData);
    console.log(loginCheck);
  };

  const handleRegisterBtn = () => {
    props.visibleChild(2);
    props.childToParent(userData);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <span>{loginCheck ? "" : "Login false"}</span>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="Username"
          name="username"
          required
        ></input>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Password"
          name="password"
          required
        ></input>
        <button>Log in!</button>
      </form>
      <button onClick={handleRegisterBtn}>Register form</button>
    </div>
  );
};

export default LoginComponent;
