// const loginSchema = require("../models/loginSchema");
// const Jwt = require("jsonwebtoken");
// const jwtKey = "prerna";

// const loginAuth = async (req, resp) => {
//   let user = await loginSchema
//     .findOne({ email: req.body.email })
//     .select("-password");
//   if (user) {
//     let pass = await loginSchema.findOne(req.body).select("-password");
//     if (pass) {
//       Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
//         if (err) {
//           resp.send({ message: "Something went wrong in Token Generation" });
//         }
//         resp.send({ user, auth: token });
//       });
//     } else resp.send({ message: "Invalid Password" });
//   } else resp.send({ message: "Email doesn't exist" });
// };

// module.exports = loginAuth;




const authMiddleware = require('../middleware/authMiddleware');
const User = require('../model/login'); // Assuming you have a User model

// Login endpoint
const loginAuth= async function(req, res) {
  console.log(req.body)
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the provided password matches the stored password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If the credentials are valid, generate a JWT token
    const token = authMiddleware.generateToken({ username: user.username });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getLogin = async (req,res) => {
  const user = await User.find({ username });
res.send(user)
}

module.exports = {loginAuth,getLogin};
