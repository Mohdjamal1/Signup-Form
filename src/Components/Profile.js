// Profile.js
import React from "react";

function Profile({ user, handleLogout }) {
  return (
    <div className="home-container">
      <div className="my-card">
        <div className="header">Account Settings</div>
        <div className="image-div">
          <div>
            <img src="profilepic.jpg" alt="userPic" className="user-img" />
            <img src="camera.jpg" alt="camera" className="camera-img" />
          </div>
          <div className="info-div">
            <div className="user-name">{user.name}</div>
            <div>{user.email}</div>
          </div>
        </div>
        <p className="user-info">
          <h2 className="h2">Welcome, {user.name}!</h2>
          Lorem Ipsum Dolor Sit Amet, Consetetur
          Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        <div className="line"></div>
        <button className="my-btn logout-btn" onClick={handleLogout}>Logout</button>
        <div className="footer line"></div>
      </div>
    </div>
  );
}

export default Profile;
