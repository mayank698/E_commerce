const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();
const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/order/me").get(isAuthenticatedUser, myOrders);
router
  .route("/admin/order")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorisedRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorisedRoles("admin"), deleteOrder);

module.exports = router;
