const mongoose = require('mongoose');

const ToySchema = new mongoose.Schema({
  type: { type: String },
  description: { type: String },
  gender: { type: String },
  age: { type: Number },
  price: { type: Number },
  review: { type: String },
});

Toy = mongoose.model('toy', ToySchema);

module.exports = Toy;
