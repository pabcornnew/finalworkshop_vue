const mongoose = require("mongoose");
const products = new mongoose.Schema({
  product_name: { type: String },
  product_detail: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model("products", products);
