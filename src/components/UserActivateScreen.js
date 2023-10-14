import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/link";
import logo from "./logo.png";


function UserActivateScreen() {
  // const [token, setToken] = useState("Nati sample TOKENNNNN")
  // token
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // Access specific query parameters
  const token = searchParams.get("token");
  //   setToken(receivedToken);
  console.log("Before   " + token);
  try {
    api
      .post("/users/activate-account", {token:token})
      .then((response) => {
        setTruthy(false);
        console.log("-- " + JSON.stringify(response) + " --");
        // After a successful activate, the user goes to the SuccessVerificationPage
        if (response.status === 200) {
          changePath("/SuccessVerificationPage");
        }
      })
      .catch((err) => {
        setTruthy(true);
        console.log("truthy " + truthy);
        // setMsg(err.response.data);
        setMsg("Error happened");
        console.log("msg " + msg);
        console.log(`Error: ${err.response.data}`);
      });
  } catch (error) {
    // Handle any other errors that occur outside of the API request
    console.error(error);
  }
  console.log("After   " + token);

  //change path
  const navigate = useNavigate();
  const changePath = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };

  const [truthy, setTruthy] = useState();
  const [msg, setMsg] = useState("");


  return (
    <div className="auth-form-container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Markata</h1>
      </div>
      <h2>Thank you for starting the activation process...</h2>

      {truthy ? <p style={{ color: "red" }}>{`${msg}`}</p> : <p></p>}
    </div>
  );
}

export default UserActivateScreen;
