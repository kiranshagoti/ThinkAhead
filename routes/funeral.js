const express = require("express");
const router = express.Router();
const uploadCloud = require("../config/cloudinary.js");
const funeral = require("../models/Funeral");

const loginCheck = () => {
  return (req, res, next) => {
    // if (req.user)
    if (req.user) {
      // if user is logged in, proceed to the next function
      next();
    } else {
      // else if user is not logged in, redirect to /login
      res.redirect("/auth");
    }
  };
};

/* GET funeral page */
router.get("/funeral", loginCheck(), (req, res, next) => {
  funeral
    .find()
    .then(data => {
      res.render("Funeral", { funeral: data, user: req.user });
    })
    .catch(err => console.log(err));
});

//creates the funeral collection
router.post("/funeral", uploadCloud("photo"), (req, res, next) => {
  let { event, body, details, theChosen } = req.body;
  funeral
    .create({
      event,
      body,
      details,
      theChosen
    })
    .then(post => {
      console.log("The funeral was added to the database", post);
    })
    .catch(err => {
      console.log("err");
      next(err);
    });
});


router.post("/funeral", loginCheck(), (req, res, next) => {
  const newFuneral = req.newFuneral;
  const { event, body, details, theChosen } = req.body;
  User.findOneAndUpdate(
    { _id: user._id },
    { $set: { event, body, details, theChosen } },
    { new: true }
  )
    .then(updatedFuneral => {
      console.log(updatedFuneral);
    })
    .catch(err => console.log(err));
});

module.exports = router;
