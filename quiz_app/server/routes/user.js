import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.json({
        Message: "User already registered with this email Address.",
      });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.json({
        Message: "Username already taken. Please choose a different one.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.json({
      status: true,
      Message: "New User Registered successfully.",
    });
  } catch (error) {
    console.error("Error occurred during signup:", error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
});

// Function or route to login a user using the username or email with POST method
router.post("/login", async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  // Find the user from the database who has this email or username
  const user = await User.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });

  if (!user) {
    return res.json({ Message: "User Not Found." });
  }

  // If the user is present, compare the password of the fetched user
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.json({ Message: "Password is incorrect." });
  }

  // If the user exists and if the password is also correct, generate a token to store it in the cookies
  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "2m",
  });

  // Store this token inside the user cookies
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 }); // Token gets deleted from the cookies after 1 hour (optional)

  return res.json({ status: true, Message: "Login Successful." });
});

// function to reset the password.
router.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ Message: "Email id not valid." });
    }

    // generate token.
    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });

    // send the email. using node mailer.

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "igurupreeth@gmail.com",
        pass: "yxmp hhwu dhlg pjap",
      },
    });

    var mailOptions = {
      from: "igurupreeth@gmail.com",
      to: email, // this will the users email which he will enter.
      subject: "Reset Password link",
      text: `http://localhost:5173/resetPassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.json({ message: "Error in Sending Email." });
      } else {
        console.log("Email sent: " + info.response);
        return res.json({ status: true, message: "Email Send Successfully." });
      }
    });
  } catch (err) {
    console.log("Error ", err);
  }
});

// create route , using post method to reset the password.
router.post("/resetPassword/:token", async (req, res) => {
  // to take parameter from the url use the useParams()
  const { token } = req.params;
  const { password } = req.body;
  // verify the token and update the password.
  try {
    const decoded = jwt.verify(token, process.env.KEY);
    // get the id from the decoded
    const id = decoded.id;
    // hash the new password entered by theuser.
    const hashedPassword = await bcrypt.hash(password, 10);
    // now find theuser by his id and update the password in the data base. model.
    await User.findByIdAndUpdate({ _id: id }, { password: hashedPassword });
    return res.json({ status: true, message: "New Password Updated." });
  } catch (err) {
    return res.json({ message: "Invalid token" });
  }
});

const verifyUser = async (req, res, next) => {
  // get the token from the cookies.
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "No token." });
    }
    // if the token is there, verify the token.
    const decoded = await jwt.verify(token, process.env.KEY);
    next();
  } catch (err) {
    return res.json(err);
    console.log(err);
  }
};

// let create a function to go to the dashboard page. and this page will be available only to the admin of the application, so we will make the route protected.
router.get("/verify", (req, res) => {
  return res.json({ status: true, message: "Authorized" });
});

// function to logout of the application.
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});

export { router as UserRouter };
///console.log(require('crypto').randomBytes(32).toString('hex'))
