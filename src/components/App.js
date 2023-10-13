import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
    <Router>
    {currentForm === "login" ? (
      <LoginScreen onFormSwitch={toggleForm} />
    ) : (
      <SignupScreen onFormSwitch={toggleForm} />
    )}
    
    <Routes>
    <Route path="/home" element={<HomeScreen/>} />
    <Route path="/cart" element={<CartScreen/>} />
    </Routes>
    
    </Router>
    </div> 


  );
}

export default App;


{/* <Routes>
<Route path="/login" element={<LoginScreen/>} />
<Route path="/signup" element={<SignupScreen/>} />
<Route path="/" element={<HomeScreen/>} />
<Route path="/cart" element={<CartScreen/>} />
</Routes> */}






{/* <div className="App">
      <Router>
        <Routes>
          {currentForm === "login" ? (
            <Route
              path="/login"
              element={<LoginScreen onFormSwitch={toggleForm} />}
            />
          ) : (
            <Route
              path="/signup"
              element={<SignupScreen onFormSwitch={toggleForm} />}
            />
          )}

          <Route path="/home" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </div> */}