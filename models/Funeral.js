const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const funeralSchema = new Schema({
  event: {
    location: String,
    adress: String,
    foods: Array,
    drinks: Array,
    vibe: String,
    music: Array,
    img: {
      imgName: String,
      imgPath: String,
      originalName: String
    },
    invite: Array,
    religon: String
  },
  body: {
    bodyinf: Boolean,
    cloths: String,
    items: String
  },
  details: {
    letters: String,
    quotes: String,
    docs: Object //upload important files
  },
  theChosen: {
    //the <3 funeral-responsible
    name: String,
    lastname: String,
    email: String,
    adress: String,
    phonenumber: String
  }
});

const Funeral = mongoose.model("Funeral", funeralSchema);

module.exports = Funeral;
