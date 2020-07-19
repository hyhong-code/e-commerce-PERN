const express = require("express");

const {
  createOrder,
  getOrders,
  getOrderDetailsById,
  payForOrder,
  cancelOrder,
  getAllOrders,
} = require("../controllers/orderController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");

const router = express.Router();

router
  .route("/")
  .get(auth, limitTo("user"), getOrders)
  .post(auth, limitTo("user"), createOrder);
router.route("/:orderId").get(auth, limitTo("user"), getOrderDetailsById);
router.route("/:orderId/pay").post(auth, limitTo("user"), payForOrder);
router.route("/:orderId/cancel").patch(auth, limitTo("user"), cancelOrder);

router.route("/all").get(auth, limitTo("admin"), getAllOrders);

module.exports = router;
