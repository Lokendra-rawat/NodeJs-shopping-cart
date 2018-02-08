var mongodb = require('mongoose');
var Schema = mongodb.Schema;

var deal = mongodb.Schema({
  storeName: {
    type: String,
    required: true,
    unique: false
  },
  dealName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  imageName: {
    type: String,
    required: false
  },
  mainPrice: {
    type: Number,
    required: false
  },
  cutPrice: {
    type: Number,
    required: false
  },
  dealUrl: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: false
  }
});

module.exports = deals = mongodb.model('deals', deal);