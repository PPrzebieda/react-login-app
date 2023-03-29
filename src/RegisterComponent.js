import { useState } from "react";
import React from "react";

const RegisterComponent = (props) => {
  const initialUser = { username: "", password: "", email: "" };
  const [newUser, setNewUser] = useState(initialUser);
  const [users, setUsers] = useState(props.parentToChild);
  const [register, setRegister] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, newUser]);
    setNewUser(initialUser);
    props.childToParent(users);
    setRegister(true);
  };

  const handleBack = () => {
    props.childToParent(users);
    props.visibleChild(1);
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <span>{register ? "User has been registered, back to login" : ""} </span>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={handleInputChange}
          type="text"
          name="username"
          value={newUser.username}
          required
        ></input>
        <input
          placeholder="Password"
          onChange={handleInputChange}
          type="text"
          name="password"
          value={newUser.password}
          required
        ></input>
        <input
          placeholder="Email"
          onChange={handleInputChange}
          type="email"
          name="email"
          value={newUser.email}
          required
        />

        <button type="submit">Register</button>
      </form>
      <button onClick={handleBack}>Back to login</button>
    </div>
  );
};

export default RegisterComponent;
