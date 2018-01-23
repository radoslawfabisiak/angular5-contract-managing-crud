var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContractorSchema = new Schema({
  name: String,
  md: Number,
  role: String,
  freeFrom: Date,
  firstExperience: Date
});

module.exports = mongoose.model('Contractor', ContractorSchema);