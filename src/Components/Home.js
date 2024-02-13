import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="my-card">
        <h1 className="title">Welcome to PopX</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button className="my-btn" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button className="my-btn log-btn" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
