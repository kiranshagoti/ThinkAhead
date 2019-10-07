const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const funeralSchema = new Schema({
  event: {
    vibe:
     {
      foods: String,
      drinks: String,
      dresscode: String,
      mood: String
    },
    body: {
      bodyinf:{ 
      burried: Boolean,
      cremated: Boolean,
      donate: Boolean,
      other: String,
      clothes: String,
      items: String,
      },
      religon: String,  
      sience: String,
      finalRest: { //added nigth time ss
        adress: String,
      },
    },
    where: {  
      location: String,
      adress: String,
      invite: Array,
    },
    music: {
      title: String,
      artist: String,
      spotify: String, ///or maybe something else
    },
    memories: {
      imgName: String,
      imgPath: String,
      originalName: String,
      story: String
    },

  },
  messages: {
    letters: String,
    quotes: String,
    docs: Object, //upload important files
    videoPath: String,
  },
  contact: {
    name: String,
    lastname: String,
    email: String,
    phonenumber: String,
    message: String,
  }
});



const Funeral = mongoose.model("Funeral", funeralSchema);

module.exports = Funeral;
