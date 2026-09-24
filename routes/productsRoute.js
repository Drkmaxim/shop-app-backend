// const express = require("express");
// const { getAllProducts, getProductsById } = require("../controller/productsController");

// const productsroute = express.Router();

// productsroute.get("/products", getAllProducts);
// productsroute.get("/products/:categoryId", getProductsById);

// module.exports = productsroute;

const express = require("express");

const {
  getProducts,
  getProductsByCategory
} = require("../controller/productsController");

const productsRoute = express.Router();

// Get all products
productsRoute.get("/products", getProducts);

// Get products by category
productsRoute.get("/products/:categoryId", getProductsByCategory);

module.exports = productsRoute;