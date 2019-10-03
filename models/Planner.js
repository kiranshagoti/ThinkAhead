const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const plannerSchema = new Schema({
  
});

const Planner = mongoose.model('Planner', plannerSchema);
module.exports = Planner;
