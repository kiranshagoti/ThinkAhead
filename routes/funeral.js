const express = require("express");
const router = express.Router();
const uploadCloud = require("../config/cloudinary.js");
const Funeral = require("../models/Funeral");
const cloudinary = require("cloudinary");

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

router.get("/funeral", (req, res) => {
  Funeral.findOne({ user: req.user })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.json(data));
});

//creates the funeral collection
router.post("/", (req, res, next) => {
  const newFuneral = req.body;
  console.log(newFuneral);
  let {
    foods,
    flowers,
    dresscode,
    sadMood,
    happyMood,
    tree,
    eventLocation,
    eventAdress,
    invite,
    musicTitle,
    musicArtist,
    spotify,
    imgName,
    imgPath,
    originalName,
    memorieStory,
    burried,
    cremated,
    donate,
    other,
    cloths,
    items,
    religon,
    sience,
    finalRestAdress,
    letters,
    quotes,
    docs,
    videoPath,
    constactName,
    emailContact,
    phonenumberContact,
    messageContact,
    userId
  } = req.body;
  Funeral.create({
    foods,
    flowers,
    dresscode,
    sadMood,
    happyMood,
    tree,
    eventLocation,
    eventAdress,
    invite,
    musicTitle,
    musicArtist,
    spotify,
    imgName,
    imgPath,
    originalName,
    memorieStory,
    burried,
    cremated,
    donate,
    other,
    cloths,
    items,
    religon,
    sience,
    finalRestAdress,
    letters,
    quotes,
    docs,
    videoPath,
    constactName,
    emailContact,
    phonenumberContact,
    messageContact,
    userId
  })
    .then(post => {
      console.log("The funeral was added to the database", post);
    })
    .catch(err => {
      console.log("err");
      next(err);
    });
});
module.exports = router;


