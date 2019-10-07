const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const funeralSchema = new Schema({
  // funeral: {
  // event: {
  // vibe: {
  foods: String,
  flowers: String,
  dresscode: String,
  mood: String,
  // },
  // where: {
  eventLocation: String,
  eventAdress: String,
  invite: Array,
  // },
  // music: {
  musicTitle: String,
  musicArtist: String,
  spotify: String, ///or maybe something else
  // },
  // memories: {
  imgName: String,
  imgPath: String,
  originalName: String,
  memorieStory: String,
  // }
  // },
  // body: {
  //   bodyinf: {
  burried: Boolean,
  cremated: Boolean,
  donate: Boolean,
  other: String,
  cloths: String,
  items: String,
  // },
  religon: String,
  sience: String,
  // finalRest: {
  //added nigth time ss
  adress: String,
  // }
  // },
  // },
  // messages: {
  letters: String,
  quotes: String,
  docs: Object, //upload important files
  videoPath: String,
  // },
  // contact: {
  constactName: String,
  emailContact: String,
  phonenumberContact: String,
  messageContact: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
  // }
});
const Funeral = mongoose.model("Funeral", funeralSchema);
module.exports = Funeral;