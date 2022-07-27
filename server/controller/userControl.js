const userModel = require("../model/userModel");
const orderModel = require("../model/orderModel");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const crypto = require("crypto");
const { purchaseOrder } = require("../utlis/email");
const jwt = require("jsonwebtoken");
const orderItemsModel = require("../model/orderItemsModel");

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ mesage: "found users", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await userModel.findById(req.params.id);
    res.status(200).json({ mesage: "found users", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { userName, email, password, address, phoneNumb } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hasked = await bcrypt.hash(password, salt);
    const users = await userModel.create({
      userName,
      email,
      password: hasked,
      phoneNumb,
      address,
    });
    res.status(200).json({ mesage: "found users", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createAdminUser = async (req, res) => {
  try {
    const { userName, email, password, address, phoneNumb } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hasked = await bcrypt.hash(password, salt);
    const users = await userModel.create({
      userName,
      email,
      password: hasked,
      isAdmin: true,
      address,
      phoneNumb,
    });
    res.status(200).json({ mesage: "found users", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    // res.json({ data: user });
    if (user) {
      const check = await bcrypt.compare(password, user.password);

      if (check) {
        const { password, ...info } = user._doc;
        const myToken = jwt.sign(
          {
            _id: user._id,
            isAdmin: user.isAdmin,
          },
          "myBread",
          { expiresIn: "2d" }
        );

        res
          .status(201)
          .json({ message: "welcome back", data: { myToken, ...info } });
      } else {
        res.json({
          message: "password is not correct",
          correctPassword: user.password,
        });
      }
    }

    // res.json({ data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const { title, description, price, type } = req.body;

    const getUser = await userModel.findById(req.params.id);

    const orderIFiles = await orderItemsModel.insertMany({
      title,
      description,
      price,
      type,
    });

    // res.status(200).json({ message: "order registered", data: orderIFiles });

    const token = crypto.randomBytes(6).toString("hex");

    const order = await orderModel.create({
      who: getUser.userName,
      phoneNumb: getUser.phoneNumb,
      address: getUser.address,
      seen: false,
      delivered: false,
      orderToken: token,

      orderItem: orderIFiles,

      // orderItem: { $push: { orderIFiles } },
    });

    order.user = getUser;
    order.save();

    getUser.order.push(mongoose.Types.ObjectId(order._id));
    getUser.save();

    purchaseOrder(getUser.email, token)
      .then((result) => {
        console.log("purchase Token sent: ", result);
      })
      .catch((error) => {
        res.status(404).json({ messageData: err });
      });

    res.status(200).json({ message: "order registered", data: order });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const getUser = await userModel
      .findById(req.params.id)
      .populate({ path: "order", options: { sort: { createdAt: -1 } } });

    res.status(200).json({ message: "order registered", data: getUser });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getOrdersNow = async (req, res) => {
  try {
    const order = await orderModel.find();
    res.status(200).json({ message: "Orderd", data: order });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = {
  getOrdersNow,
  signinUser,
  createAdminUser,
  createUser,
  getUser,
  getUsers,
  createOrder,
  getOrder,
};
