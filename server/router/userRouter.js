const express = require("express");
const {
  signinUser,
  createAdminUser,
  createUser,
  getUser,
  getUsers,
  createOrder,
  getOrder,
  getOrdersNow,
} = require("../controller/userControl");

const router = express.Router();

router.route("/").get(getUsers);

router.route("/:id").get(getUser);

router.route("/create").post(createUser);
router.route("/createAdmin").post(createAdminUser);
router.route("/signinUser").post(signinUser);

router.route("/:id/order").post(createOrder);
router.route("/:id/order").get(getOrder);
router.route("/order").post(getOrdersNow);

module.exports = router;
