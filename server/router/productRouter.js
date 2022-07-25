const express = require("express");
const upload = require("../utlis/upload");
const {
  getProducts,
  createProducts,
} = require("../controller/productController");

const router = express.Router();

router.route("/").get(getProducts);

router.route("/create").post(upload, createProducts);

module.exports = router;
