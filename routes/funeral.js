const express = require("express");
const router = express.Router();
//const uploadCloud = require("../config/cloudinary.js");
const Funeral = require("../models/Funeral");
//const cloudinary = require("cloudinary");

router.post("/", (req, res) => {
  const {
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

  Funeral.findOne({ user: req.user })
    .then(found => {
      if(found) {
        return res
        .json({ message: "Funeral can be created"})
      }

      return Funeral.create({  foods: foods,
        flowers: flowers,
        dresscode: dresscode,
        sadMood: sadMood,
        happyMood: happyMood,
        tree: tree,
        eventLocation: eventLocation,
        eventAdress: eventAdress,
        invite: invite,
        musicTitle: musicTitle,
        musicArtist: musicArtist,
        spotify: spotify,
        imgName: imgName,
        imgPath: imgPath,
        originalName: originalName,
        memorieStory: memorieStory,
        burried: burried,
        cremated: cremated,
        donate: donate,
        other: other,
        cloths: cloths,
        items: items,
        religon: religon,
        sience: sience,
        finalRestAdress: finalRestAdress,
        letters: letters,
        quotes: quotes,
        docs: docs,
        videoPath: videoPath,
        contactName: contactName,
        emailContact: emailContact,
        phonenumberContact: phonenumberContact,
        messageContact: messageContact,
        userId: userId}).then(Funeral => {
        res.json(Funeral);
      }
    );
  })
  .catch(err => {
    res.json(err);
  });
});


router.get("/", (req, res) => {
  Funeral
    .find()
    .then(data => {
      res.render("/", { funeral: data, user: req.user });
    })
    .catch(err => console.log(err));
});


router.put("/", (req, res) => {
  const {
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

  Funeral.findByIdAndUpdate(
    req.params.funeral,
    {
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
    },
    { new: true }
  )(console.log(req.body))
    .then(funeral => {
      res.json(funeral);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
