//const { response } = require("express");
const express = require("express");
const router = express.Router();
//const mongoose = require("mongoose");
const Name = require("../models/name-model");

router.get("/names", (req, res) => {
  Name.find().then((allNamesfromDB) => {
    // res.render('projects', allProjectsFromDB)
    res.json(allNamesfromDB);
  });
});

//Route to add a new project
router.post("/names", (req, res) => {
  const { first, last, thumbnail, large, gender, city, state } = req.body;
  Name.create({
    name: {
      first,
      last,
    },
    picture: {
      thumbnail,
      large,
    },
    gender,
    location: {
      city,
      state,
    },
  }).then((response) => {
    res.json(response);
  });
});

//Route to find project by id
router.get("/names/:id", (req, res) => {
  Name.findById(req.params.id).then((theProjectFromDB) => {
    res.json(theProjectFromDB);
  });
});

//Route to update a project
router.put("/names/:id", (req, res) => {
  const projectId = req.params.id;
  const projectWithNewDetails = req.body;

  Name.findByIdAndUpdate(projectId, projectWithNewDetails).then(() => {
    res.json({
      message: `Employee with ${req.params.id} was updated successfully`,
    });
  });
});

//delete route
router.delete("/names/:id", (req, res) => {
  Name.findByIdAndRemove(req.params.id).then(() => {
    res.json({ message: `Employee with ${req.params.id} was deleted` });
  });
});

module.exports = router;
