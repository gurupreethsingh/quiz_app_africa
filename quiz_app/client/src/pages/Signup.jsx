import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/signup", {
        username,
        email,
        password,
      });
      if (response.data.status) {
        console.log(response);
        setUsername("");
        setEmail("");
        setPassword("");
        alert("Registration successful. You can login.");
        navigate("/login");
      } else {
        console.log("Unable to register: ", response.data.message);
        // You can handle the error message here and display it to the user
        // For example:
        setError(response.data.message);
      }
    } catch (error) {
      console.log("Unable to register: ", error);
      // Handle the error case here
      // For example:
      setError("Unable to register. Please try again.");
    }
  };

  return (
    <div>
      <h6>Sign Up page.</h6>
      <div className="card p-5 m-5 rounded-3">
        <form className="signupform" onSubmit={handleSubmit}>
          <i>
            <h6 className="text-center text-decoration-underline">Sign Up</h6>
          </i>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <small>
              <Link to="/login" className="text-dark">
                Have Account? Sign In
              </Link>
            </small>
          </div>
          <button type="submit" className="btn btn-sm btn-outline-dark">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
