const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const funeralSchema = new Schema({

  foods: String,
  flowers: String,
  dresscode: String,
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
  items: String,
  
  religon: String,
  sience: String,
  
  finalRestAdress: String,

  letters: String,
  letterTo: String,
  quotes: String,
  docs: Object, //upload important files
  videoPath: String,

  constactName: String,
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