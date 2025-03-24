import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    profilePic: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/profile").then((res) => {
      setProfile(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/profile", profile).then(() => {
      alert("Profile Updated!");
    });
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <img src={profile.profilePic || "https://via.placeholder.com/150"} alt="Profile" />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio"></textarea>
        <input type="text" name="profilePic" value={profile.profilePic} onChange={handleChange} placeholder="Profile Picture URL" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
