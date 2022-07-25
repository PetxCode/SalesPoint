const mongoose = require("mongoose");

const orderModel = mongoose.Schema(
  {
    who: {
      type: String,
    },

    address: {
      type: String,
    },
    phoneNumb: {
      type: String,
    },
    seen: {
      type: Number,
    },
    delievered: {
      type: Number,
    },
    orderItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", orderModel);
