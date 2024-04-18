// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState(""); // State variable for error message
// //   const navigate = useNavigate();

// //   axios.defaults.withCredentials = true;

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post("http://localhost:3001/auth/login", {
// //         username,
// //         password,
// //       });
// //       if (response.data.status) {
// //         console.log(response);
// //         setUsername("");
// //         setPassword("");
// //         setError(""); // Clear error message if login is successful
// //         alert("Login Successful.");
// //         navigate("/home");
// //       } else {
// //         console.log("Unable to Login: ", response.data.message);
// //         // Set error message received from backend
// //         setError(response.data.message);
// //       }
// //     } catch (error) {
// //       console.log("Unable to login: ", error);
// //       // Set generic error message for network or other errors
// //       setError("Unable to login. Please try again.");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h6>Login page.</h6>

// //       <div className="card p-5 m-5 rounded-3">
// //         <form className="signupform" onSubmit={handleSubmit}>
// //           <i>
// //             <h6 className="text-center text-decoration-underline">Log In</h6>
// //           </i>
// //           {error && ( // Check if error exists and render error message if it does
// //             <div className="alert alert-danger" role="alert">
// //               {error}
// //             </div>
// //           )}
// //           {/* Display error message */}
// //           <div className="mb-3">
// //             <label htmlFor="username" className="form-label">
// //               Username / Email
// //             </label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               id="username"
// //               required
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="password" className="form-label">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               className="form-control"
// //               id="password"
// //               required
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <small>
// //               <Link to="/signup" className="text-dark">
// //                 Need Account? Sign Up
// //               </Link>
// //             </small>
// //           </div>
// //           <button type="submit" className="btn btn-sm btn-outline-dark">
// //             Login
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // State variable for error message
//   const navigate = useNavigate();

//   axios.defaults.withCredentials = true;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/auth/login", {
//         username,
//         password,
//       });
//       if (response.data.status) {
//         console.log(response);
//         setUsername("");
//         setPassword("");
//         setError(""); // Clear error message if login is successful
//         alert("Login Successful.");
//         navigate("/home");
//       } else {
//         console.log("Unable to Login: ", response.data.message);
//         // Set error message received from backend
//         setError(response.data.message);
//       }
//     } catch (error) {
//       console.log("Unable to login: ", error);
//       // Set generic error message for network or other errors
//       setError("Unable to login. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h6>Login page.</h6>

//       <div className="card p-5 m-5 rounded-3">
//         <form className="signupform" onSubmit={handleSubmit}>
//           <i>
//             <h6 className="text-center text-decoration-underline">Log In</h6>
//           </i>
//           {error && (
//             <div className="alert alert-danger" role="alert">
//               {error}
//             </div>
//           )}
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">
//               Username / Email
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="username"
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <small>
//               <Link to="/signup" className="text-dark">
//                 Need Account? Sign Up
//               </Link>
//             </small>
//           </div>
//           <button type="submit" className="btn btn-sm btn-outline-dark">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [usernameOrEmail, setUsernameOrEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   axios.defaults.withCredentials = true;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/auth/login", {
//         usernameOrEmail,
//         password,
//       });
//       if (response.data.status) {
//         console.log(response);
//         setUsernameOrEmail("");
//         setPassword("");
//         setError("");
//         alert("Login Successful.");
//         navigate("/home");
//       } else {
//         console.log("Unable to Login: ", response.data.message);
//         setError(response.data.message);
//         setUsernameOrEmail(""); // Clear input fields on unsuccessful login
//         setPassword(""); // Clear input fields on unsuccessful login
//         alert("Login unsuccessful. Please try again.");
//       }
//     } catch (error) {
//       console.log("Unable to login: ", error);
//       setError("Unable to login. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h6>Login page.</h6>

//       <div className="card p-5 m-5 rounded-3">
//         <form className="signupform" onSubmit={handleSubmit}>
//           <i>
//             <h6 className="text-center text-decoration-underline">Log In</h6>
//           </i>
//           {error && (
//             <div className="alert alert-danger" role="alert">
//               {error}
//             </div>
//           )}
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">
//               Username / Email
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="username"
//               required
//               value={usernameOrEmail}
//               onChange={(e) => setUsernameOrEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <small>
//               <Link to="/signup" className="text-dark">
//                 Need Account? Sign Up
//               </Link>
//             </small>
//           </div>
//           <button type="submit" className="btn btn-sm btn-outline-dark">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        usernameOrEmail,
        password,
      });
      console.log("Response:", response.data); // Log the response data
      if (response.data.status) {
        console.log(response);
        setUsernameOrEmail("");
        setPassword("");
        setError("");
        alert("Login Successful.");
        navigate("/home");
      } else {
        console.log("Login failed: ", response.data.message);
        setError(response.data.message);
        setUsernameOrEmail(""); // Clear input fields on unsuccessful login
        setPassword(""); // Clear input fields on unsuccessful login
        alert("Username or password did not match, Try again.");

        if (response.data.message === "User Not Found.") {
          alert("User Not Found.");
        }
      }
    } catch (error) {
      alert("Unable to login, please try again.");
      console.log("Error during login: ", error);
      setError("Unable to login. Please try again.");
    }
  };

  return (
    <div>
      <h6>Login page.</h6>

      <div className="card p-5 m-5 rounded-3">
        <form className="signupform" onSubmit={handleSubmit}>
          <i>
            <h6 className="text-center text-decoration-underline">Log In</h6>
          </i>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="mb-3">
            {error && <p className="text-danger">{error}</p>}
            <label htmlFor="username" className="form-label">
              Username / Email
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
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
              <Link to="/forgotPassword" className="text-danger">
                Forgot password? Click here.
              </Link>
            </small>
          </div>
          <div className="mb-3">
            <small>
              <Link to="/signup" className="text-success">
                Need Account? Sign Up
              </Link>
            </small>
          </div>
          <button type="submit" className="btn btn-sm btn-outline-dark">
            Login
          </button>
          {error && <p className="text-danger mt-3">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
