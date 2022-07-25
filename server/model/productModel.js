const mongoose = require("mongoose");
const productModel = mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },
    type: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productModel);
