var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  gemType: String,
  estimatedValue: Number,
  rare: Boolean,
  dateCollected: Date
});

var User = mongoose.model('gems', userSchema);

module.exports = User;
