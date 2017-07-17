let mongodb = require('mongoose');

let reviewSchema = mongodb.Schema({
  proId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

let reviews = mongodb.model('review', reviewSchema);

module.exports = reviews;