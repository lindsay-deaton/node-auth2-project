const Users = require("../users/users-model.js")
const router = require("express").Router()
const jwt = require("jsonwebtoken")
const { jwtSecret } = require("../../config/secrets.js")


router.post("/register", (req, res) => {
  const { username, password } = req.body
  Users.insert(req.body)
})


function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  },
  const options = {
    expiresIn: "1d",
  }
  return jwt.sign(payload, jwtSecret, options)
  }

module.exports = router;