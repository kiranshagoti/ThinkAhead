const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content:String
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
