import React, { useState } from "react";

function Login({ handleLogin }) {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEmail.trim() !== "" && password.trim() !== "") {
      const userData = { userEmail, password };
      handleLogin(userData);
      setUserEmail('');
      setPassword('');
    } else {
      alert("Email Or Password is Empty");
    }
  };

  return (
    <div className="home-container">
      <div className="my-card">
        <h1 className="login-title">Signin to your PopX account</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="my-label">Email Address</div>
              <input
                className="my-input"
                type="email"
                placeholder="Enter email address"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <div className="my-label">Password</div>
              <input
                className="my-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="my-btn login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
