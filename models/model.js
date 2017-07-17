let mongodb = require('mongoose');

let productSchema = mongodb.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
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

let product = mongodb.model('product', productSchema);

module.exports = product;