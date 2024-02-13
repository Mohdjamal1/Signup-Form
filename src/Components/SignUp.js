// Signup.js
import React, { useState } from "react";

function Signup({ handleSignUp }) {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name.trim() !== "" &&
      user.phone.trim() !== "" &&
      user.email.trim() !== "" &&
      user.password.trim() !== ""
    ) {
      handleSignUp(user);
      localStorage.setItem("user", JSON.stringify(user));
      setUser({
        name: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "",
      });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="home-container">
      <div className="my-card">
        <h1 className="login-title">Create your PopX account</h1>

        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="my-label">
                Full Name<span>*</span>
              </div>
              <input
                className="my-input"
                type="text"
                placeholder="Marry Doe"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="input-container">
              <div className="my-label">
                Phone number<span>*</span>
              </div>
              <input
                className="my-input"
                type="number"
                placeholder="+91..."
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>
            <div className="input-container">
              <div className="my-label">
                Email address<span>*</span>
              </div>
              <input
                className="my-input"
                type="email"
                placeholder="Enter email address"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="input-container">
              <div className="my-label">
                Password<span>*</span>
              </div>
              <input
                className="my-input"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="input-container">
              <div className="my-label">Company name</div>
              <input
                className="my-input"
                type="text"
                placeholder="Company name"
                value={user.company}
                onChange={(e) => setUser({ ...user, company: e.target.value })}
              />
            </div>
            <div className="radio-div">
              <p>
                Are you an Agency?<span>*</span>
              </p>
              <div className="label-div">
                <input
                  type="radio"
                  name="gender"
                  value='Yes'
                  className="radio-input"
                  onChange={(e)=> setUser({...user,agency:e.target.value})}
                />
                <label className="radio-label">Yes</label>

                <input
                  type="radio"
                  name="gender"
                  value='No'
                  className="radio-input"
                  onChange={(e)=> setUser({...user,agency:e.target.value})}
                />
                <label className="radio-label">No</label>
              </div>
            </div>
            <button className="my-btn" type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
