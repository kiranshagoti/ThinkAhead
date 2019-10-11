const express = require("express");
const router = express.Router();
//const uploadCloud = require("../config/cloudinary.js");
const Funeral = require("../models/Funeral");
// const cloudinary = require("cloudinary");
const User = require("../models/User");



//###############

router.post("/", (req, res, next) => {
  // const newFuneral = req.newFuneral;
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
//###############





router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("ID FROM ROUTER", id);
  Funeral.findOne({ _id: id })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.json(err));
});

router.post("/new", (req, res, next) => {

  const { howToBeBuried, kindOfVibe, documents } = req.body;

  Funeral.create({
    food: "",
    flowers: "",
    dressCode: "",
    kindOfVibe: kindOfVibe,
    eventLocation: "",
    eventAddress: "",
    invite: "",

    // musicTitle: "",
    // musicArtist: "",
    
    playlist:[],
    spotify: "",
    imgName: "",
    imgPath: "",
    originalName: "",
    
    memories: [],

    howToBeBuried: howToBeBuried,
    clothes: "",
    treasureInput: "",
    religion: "",
    sience: "",
    finalRestAddress: "",
    letters: "",
    quotes: "",
    documents: documents,
    videoPath: "",
    contactName: "",
    emailContact: "",
    phonenumberContact: "",
    messageContact: "",
    userId: req.user
  })
    .then(post => {
      console.log("The funeral was added to the database", post);
      User.findOneAndUpdate(
        { _id: req.user._id },
        { funeral: post },
        { new: true }
      )
        .then(user => {
          res.json(user)
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
      res.json(err);
    });
});



router.post("/updatefuneral/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Funeral.findByIdAndUpdate({ _id: id }, { ...changes }, { new: true })
    .then(data => {
      console.log("dataaaaa", data);
      res.json(data);
    })
    .catch(err => console.log(err));
});



module.exports = router;
