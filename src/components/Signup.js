import React, { useState } from "react";
import logo from './logo.png'

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const [strength, setStrength] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const calculateStrength = (password) => {
    const lengthScore = Math.min(password.length / 8, 1); // Normalize the length score
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    const complexityScore =
      (hasUpperCase + hasLowerCase + hasNumber + hasSpecialChar) / 4;

    const strengthPercentage = ((lengthScore + complexityScore) / 2) * 100;
    return strengthPercentage;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strengthPercentage = calculateStrength(newPassword);
    setStrength(strengthPercentage);
  };

  const getPasswordColor = () => {
    if (strength < 25) {
      return "red";
    } else if (strength < 50) {
      return "orange";
    } else if (strength < 75) {
      return "#F3D421";
    } else {
      return "lightgreen";
    }
  };

  return (
    <div className="auth-form-container">
          <div className="logo">
        <img
          src={logo}
          alt="logo"
        />
        <h1>Markata</h1>
      </div>
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="fName lName">Full Name</label>
        <div className="side-by-side">
          <input
            value={fName}
            name="fName"
            onChange={(e) => setFName(e.target.value)}
            id="fName"
            placeholder="Enter first name"
          />
          <input
            value={lName}
            name="lName"
            onChange={(e) => setLName(e.target.value)}
            id="lName"
            placeholder="Enter last name"
          />
        </div>

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="Enter password"
          id="password"
          name="password"
        />
        <div
          className="password-strength-bar"
          style={{
            width: `${strength}%`,
            maxWidth: "150%",
            backgroundColor: getPasswordColor(),
          }}
        ></div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="link-btn" onClick={() => props.onFormSwitch("login")}>
          Login here
        </span>
      </p>
    </div>
  );
}

export default Signup;
