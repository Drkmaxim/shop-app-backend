// const products = require("../data/products");

// const getAllProducts = (req, res) => {
//     res.json(products);
// };

// const getProductsById = (req, res) => {
//     const {categoryId} = req.params;
//     const productList = products.filter((product) => product.id === categoryId);
//     res.json(productList);
// }

// module.exports = {getAllProducts, getProductsById};

const products = require("../data/products");

// Get all products
const getProducts = (req, res) => {
  res.json(products);
};

// Get products by category
const getProductsByCategory = (req, res) => {
  const { categoryId } = req.params;

  const filteredProducts = products.filter(
    (product) => product.category === categoryId
  );

  res.json(filteredProducts);
};

module.exports = {
  getProducts,
  getProductsByCategory
};