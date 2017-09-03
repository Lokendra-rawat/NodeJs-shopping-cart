let mongoose = require('mongoose');

let userSchema =  mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cart: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('user', userSchema);