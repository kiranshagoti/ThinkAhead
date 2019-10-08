const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const funeralSchema = new Schema({

  food: String,
  flowers: String,
  dressCode: String,
  // happyMood: Boolean,
  // sadMood: Boolean,

  kindOfVibe:String,

  eventLocation: String,
  eventAdress: String,
  invite: Array,
 
  musicTitle: String,
  musicArtist: String,
  spotify: String, ///or maybe something else

  imgName: String,
  imgPath: String,
  originalName: String,
  memorieStory: String,

  // burried: Boolean,
  // cremated: Boolean,
  // tree: Boolean,
  // donate: Boolean,
  howToBeBuried:String,


  other: String,
  clothes: String,
  treasureInput: String,
  
  religion: String,
  sience: String,
  
  finalRestAdress: String,

  letters: String,
  letterTo: String,
  quotes: String,
  documents: Object, //upload important files
  videoPath: String,

  contactName: String,
  emailContact: String,
  phonenumberContact: String,
  messageContact: String,
/*   userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  } */
 
});
const Funeral = mongoose.model("Funeral", funeralSchema);
module.exports = Funeral;