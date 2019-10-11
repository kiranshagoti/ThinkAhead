const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const funeralSchema = new Schema({
  food: String,
  flowers: String,
  dressCode: String,
  // happyMood: Boolean,
  // sadMood: Boolean,

  kindOfVibe: String,

  eventLocation: String,
  eventAddress: String,
  invite: Array,

  // musicTitle: String,
  // musicArtist: String,
  playlist: [Schema.Types.Mixed],
  spotify: String, ///or maybe something else

  imgName: String,
  imgPath: String,
  originalName: String,
  // memorieStory: String,
  memories: [Schema.Types.Mixed],

  // burried: Boolean,
  // cremated: Boolean,
  // tree: Boolean,
  // donate: Boolean,
  howToBeBuried: String,

  other: String,
  clothes: String,
  treasureInput: String,

  religion: String,
  science: String,

  finalRestAddress: String,

  letters: [Schema.Types.Mixed], //Blenda changed Wednesdaz
  // letterTo: String,
  quotes: [Schema.Types.Mixed], //Blenda changed wednesday

  documents: Object, //upload important files
  videoPath: String,

  lovedOne: Schema.Types.Mixed,

  contactName: String,
  emailContact: String,
  phonenumberContact: String,
  messageContact: String
  /*   userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  } */
});
const Funeral = mongoose.model("Funeral", funeralSchema);
module.exports = Funeral;
