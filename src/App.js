import "./App.css";
import React, { useState } from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    console.log(userData);
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    if(data === null){
      alert('please signUp First');
      return;
    }
    if (
      data.email === userData.userEmail &&
      data.password === userData.password
    ) {
      setLoggedIn(true);
      setUser(data);
      console.log(user);
    } else {
      alert("email or password is not match");
    }
  };

  const handleSignUp = (userData) => {
    setUser(userData);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <div className="App">
      {/* Define Routes */}
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/profile" />
            ) : (
              <Home handleLogin={handleLogin} />
            )
          }
        ></Route>
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Profile user={user} handleLogout={handleLogout} />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        ></Route>
        <Route
          path="/signup"
          element={
            loggedIn ? (
              <Profile user={user} handleLogout={handleLogout} />
            ) : (
              <SignUp handleSignUp={handleSignUp} />
            )
          }
        ></Route>
        <Route
          path="/profile"
          element={
            loggedIn ? (
              <Profile user={user} handleLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
