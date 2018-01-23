var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var withSchema = new Schema({
  name: String,
  _id: String
});

var ContractSchema = new Schema({
  with: withSchema,
  signed: Boolean,
  md: Number,
  clientMd: Number,
  role: String,
  from: Date,
  to: Date,
  payDate: Date,
  client: String
});

module.exports = mongoose.model('Contract', ContractSchema);