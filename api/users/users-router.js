const { Router } = require("express")
const Users = require("./users-model")
const router = require("express").Router()
const restricted = require("./../auth/middleware.js")

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
    res.json(users)
    })
  .catch(err => res.send(err))
})

module.exports = router