const express = require("express");
const router = express.Router();
const Funeral = require("../models/Funeral");
const User = require("../models/User");
router.put("/updatefuneral/:id"),
  (req, res) => {
    // const {
    //   food,
    //   flowers,
    //   dressCode,
    //   kindOfVibe,
    //   eventLocation,
    //   eventAdress,
    //   invite,
    //   musicTitle,
    //   musicArtist,
    //   spotify,
    //   imgName,
    //   imgPath,
    //   originalName,
    //   memorieStory,
    //   howToBeBuried,
    //   other,
    //   clothes,
    //   treasureInput,
    //   religion,
    //   sience,
    //   finalRestAdress,
    //   letters,
    //   letterTo,
    //   quotes,
    //   documents,
    //   videoPath,
    //   contactName,
    //   emailContact,
    //   phonenumberContact,
    //   messageContact
    // } = req.body;
    const id = req.params.id;
    Funeral.findOneAndUpdate(
      { _id: id },
      req.body,
      // {
      //   food,
      //   flowers,
      //   dressCode,
      //   kindOfVibe,
      //   eventLocation,
      //   eventAdress,
      //   invite,
      //   musicTitle,
      //   musicArtist,
      //   spotify,
      //   imgName,
      //   imgPath,
      //   originalName,
      //   memorieStory,
      //   howToBeBuried,
      //   other,
      //   clothes,
      //   treasureInput,
      //   religion,
      //   sience,
      //   finalRestAdress,
      //   letters,
      //   letterTo,
      //   quotes,
      //   documents,
      //   videoPath,
      //   contactName,
      //   emailContact,
      //   phonenumberContact,
      //   messageContact
      // }
      { new: true }
    ).then(updatedFuneral => {
      console.log(updatedFuneral); //not sure if updatedFuneral is correct..
    });
  };
