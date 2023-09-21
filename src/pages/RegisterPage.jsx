import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = ({ setUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });

      const data = res.data;
      console.log(data);

      setUser(data); // Store only the data returned from the server
      navigate("/LoginPage");
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="register">
        <h2>Welcome to</h2>
        <img id="reg-img" src="../assets/img-51.png" width="auto" height="auto" alt="" />
        <p>Please fill out this form with the required informations</p>
        {error && <p>{error}</p>} {/* Display error messages */}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="first-name">Enter Your First Name: </label>
            <input
              id="first-name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="last-name">Enter Your Last Name: </label>
            <input
              id="last-name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="email">Enter Your Email: </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Create Your Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              pattern="[a-z0-5]{8,}"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="confirm-password">Confirm Your Password:</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              pattern="[a-z0-5]{8,}"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </fieldset>
          <input onClick={() => {}} type="submit" value="Register" />
          <p>
            Already registered? Please login <Link to="/login">here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
