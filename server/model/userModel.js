const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    userName: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    password: {
      type: String,
    },
    order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders",
      },
    ],
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userModel);
