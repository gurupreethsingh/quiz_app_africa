import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/forgotPassword",
        {
          email,
        }
      );
      if (response.data.status) {
        alert("Password reset link has been sent to your email. Please check.");
        console.log(response);
        setEmail("");

        navigate("/login");
      } else {
        console.log("Unable to send reset link: ", response.data.message);
        // You can handle the error message here and display it to the user
        // For example:
        setError(response.data.message);
      }
    } catch (error) {
      console.log("Unable to send the reset link: ", error);
      // Handle the error case here
      // For example:
      setError("Unable to send reset link. Please try again.");
    }
  };

  return (
    <div>
      <h6>forgot password page.</h6>

      <div className="container border rounded-2 p-5 mt-5 mb-5">
        <small>
          <p className="text-center mb-3">
            Please enter the email id, we will send you the reset link to reset
            your password.
          </p>
        </small>

        <div>
          <form className="signupform text-center" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email id."
              />
            </div>

            <button type="submit" className="btn btn-sm btn-outline-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
