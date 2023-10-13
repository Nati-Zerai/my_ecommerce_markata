import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import api from "../api/link";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitted, setSubmitted] = useState(false);
  const [isEmpty, setEmpty] = useState(false);

  const [date, setDate] = useState("");
  const [truthy, setTruthy] = useState();
  const [msg, setMsg] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!email) {
      setEmpty(true);
    }
    console.log(email);

    const post = {
      emailId: email,
      password: password,
    };
    try {
      const response = await api.post("/login", post);
      setTruthy(false);
      console.log("-- " + JSON.stringify(response) + " --");
      //TODO: After successful signup user goes to home page
    } catch (err) {
      setTruthy(true);
      console.log("truthy " + truthy);
      // setMsg(err.response.data);
      setMsg("Error happened");
      console.log("msg " + msg);
      console.log(`Error: ${err.response.data}`);
    }
  };

  return (
    <div className="auth-form-container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Markata</h1>
      </div>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          // style={{ border: `${errorEmail ? "red" : "none"}` }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          required
          className={isEmpty && isSubmitted ? "error" : ""}
        />
        <label htmlFor="password">Password</label>
        <input
          // style={{ border: `${errorEmail ? "red" : "none"}` }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          id="password"
          name="password"
          required
          className={isEmpty && isSubmitted ? "error" : ""}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <span className="link-btn" onClick={() => props.onFormSwitch("signup")}>
          Signup here
        </span>
      </p>{" "}
      <Link to="/cart"> Cart </Link>
    </div>
  );
}

export default LoginScreen;
