import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    try {
      axios.get("http://localhost:3001/auth/verify").then((res) => {
        if (res.data.status) {
        }
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div>
      <h6>Admin Dashboard.</h6>
    </div>
  );
};

export default Dashboard;
