const express = require("express");
const protect = require("../middlewares/authMiddleware");
const {
  addToCart,
  getcart,
  updatecartItem,
  deletecartItem,
} = require("../controllers/cartItemController");

const cartItemRoutes = express.Router();
cartItemRoutes.post("/", protect, addToCart);
cartItemRoutes.get("/", protect, getcart);
cartItemRoutes.put("/:id", protect, updatecartItem);
cartItemRoutes.delete("/:id", protect, deletecartItem);
module.exports = cartItemRoutes;