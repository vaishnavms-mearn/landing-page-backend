const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sales: {
    type: Number,
    default: 0, 
  }
});

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;
