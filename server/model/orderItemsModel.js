const mongoose = require("mongoose");

const orderItemModel = mongoose.Schema(
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
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orders",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orderItems", orderItemModel);
