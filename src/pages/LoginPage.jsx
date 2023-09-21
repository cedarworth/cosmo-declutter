import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email: emailInput,
        password: passwordInput,
      });

      const data = res.data;
      console.log(data);

      setUser(data); // Store only the data returned from the server
      navigate("/");
    } catch (err) {
      setError(err.response.data.message)
    }
  };

  return (
    <div>
      <Navbar />
      {/* <!--Login form--> */}
      <div className="login">
        <h2>Welcome Back to</h2>
        <img id="reg-img" src="../assets/img-51.png" width="auto" height="auto" alt="" />
        <h3>Please Login</h3>
        <p>Kindly fill out the fields with the required information</p>
        {error && <p>{error}</p>} {/* Display error messages */}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              Enter Your Email:{" "}
              <input
                id="email"
                name="email"
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
              />
            </label>
            <label htmlFor="new-password">
              Enter Your Password:{" "}
              <input
                id="new-password"
                name="password"
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                pattern="[a-z0-5]{8,}"
                required
              />
            </label>
          </fieldset>
          <input type="submit" value="login" />
          <p>
            Not yet registered? Please register <Link to="/register">here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
