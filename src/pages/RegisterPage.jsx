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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/api/auth/register", {
        firstName: firstName,
        lastName,
        password,
        email,
        confirmPassword,
      });

      const data = res.data;
      console.log(data);

      setUser({ email, password, firstName, lastName });
      console.log({ email, password, firstName, lastName });
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="register">
        <h2>Welcome to CosmoDeclutter!</h2>
        <p>Please fill out this form with the required informations</p>
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
          <input type="submit" value="Register" />
          <p>
            Already registered? Please login <Link to="/login">here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
