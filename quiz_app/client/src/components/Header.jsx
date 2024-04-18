import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handlelogout = () => {
    axios
      .get(`http://localhost:3001/auth/logout`)
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        }
      })
      .catch(err);
    {
      console.log(err);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            Ecoders-Quiz-app
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/login">
                  Sign In
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/signup">
                  Sign Up
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="btn btn-sm btn-outline-danger ms-5 me-2"
                  onClick={handlelogout}
                >
                  logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
