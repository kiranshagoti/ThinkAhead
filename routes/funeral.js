const express = require("express");
const router = express.Router();
//const uploadCloud = require("../config/cloudinary.js");
const Funeral = require("../models/Funeral");
const cloudinary = require("cloudinary");
const User = require('../models/User')

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

router.get("/:id", (req, res) => {

  const id = req.params.id
  console.log('ID FROM ROUTER',id)
  Funeral.findOne({_id :id})
    .then(data => {
      res.json(data);
    })
    .catch(err => res.json(err));
});

//creates the funeral collection
router.post("/", (req, res, next) => {
  // const newFuneral = req.body;
  const { howToBeBuried, kindOfVibe, documents} = req.body;

  Funeral.create({
    foods:'',
    flowers:'',
    dresscode:'',
    kindOfVibe:kindOfVibe,
    tree:'',
    eventLocation:'',
    eventAdress:'',
    invite:'',
    musicTitle:'',
    musicArtist:'',
    spotify:'',
    imgName:'',
    imgPath:'',
    originalName:'',
    memorieStory:'',
    howToBeBuried:howToBeBuried,
    // other,
    cloths:'',
    items:'',
    religon:'',
    sience:'',
    finalRestAdress:'',
    letters:'',
    quotes:'',
    docs:'',
    videoPath:'',
    constactName:'',
    emailContact:'',
    phonenumberContact:'',
    messageContact:'',
    userId:req.user
  })
    .then(post => {
      console.log("The funeral was added to the database", post);
      User.findOneAndUpdate({_id:req.user._id}, {funeral: post}, {new:true}).then(user => {
        console.log(user)
      }).catch(err => console.log(err))
    })
    .catch(err => {
      res.json(err);
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

// router.post("/funeral", (req, res) => {
//   funeral.create({
    
//   })
// })

module.exports = router;
