import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/auth/resetPassword/${token}`, // Corrected URL
        {
          password,
        }
      );
      if (response.data.status) {
        alert(
          "New password updated Successfully, you can login with new password."
        );
        navigate("/login");
        console.log(response.data);
      } else {
        console.log("Unable to send reset password: ", response.data.message);
      }
    } catch (error) {
      console.log("Unable to reset the password: ", error);
    }
  };

  return (
    <div>
      <h6>Reset password Page.</h6>
      <div className="container border rounded-2 p-5 mt-5 mb-5">
        <div>
          <form className="signupform text-center" onSubmit={handleSubmit}>
            <i>
              {" "}
              <h6 className="text-center">Reset a new password.</h6>
            </i>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </div>

            <button type="submit" className="btn btn-sm btn-outline-dark">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
