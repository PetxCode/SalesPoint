const productModel = require("../model/productModel");
const cloudinary = require("../utlis/cloudinary");

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "product gotten", data: products });
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

const createProducts = async (req, res) => {
  try {
    const { title, description, price, type } = req.body;
    const avatar = await cloudinary.uploader.upload(req.file.path);
    const products = await productModel.create({
      title,
      description,
      price,
      type,
      image: avatar.secure_url,
    });

    res.status(201).json({ message: "product gotten", data: products });
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

module.exports = {
  getProducts,
  createProducts,
};
