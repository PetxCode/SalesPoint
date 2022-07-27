const mongoose = require("mongoose");

const orderModel = mongoose.Schema(
  {
    who: {
      type: String,
    },

    orderToken: {
      type: String,
    },

    address: {
      type: String,
    },
    phoneNumb: {
      type: Number,
    },
    seen: {
      type: Boolean,
    },
    delievered: {
      type: Boolean,
    },
    orderItem: [
      {
        type: Object,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", orderModel);
