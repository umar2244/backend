const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  prices: {
    type: Number,
    required: true,
  },

  productDes: {
    type: String,
    required: true,
  },
  productImage:{
    type:String,
    require:true,
  }
});

module.exports = mongoose.model("Product", productSchema);
