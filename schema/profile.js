let mongoose = require('mongoose');
let validator = require('validator');

//sets up profile
let profileSchema = new mongoose.Schema({
  name: String,
  admin: Boolean,
  username: String,
  email: String,
  age: String,
  password: String,
  about: String
})

module.exports = mongoose.model('profile', profileSchema);
