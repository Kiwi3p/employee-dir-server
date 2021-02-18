const express = require("express");
const router = express.Router();
const Name = require("../models/name-model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
