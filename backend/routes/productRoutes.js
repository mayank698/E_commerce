const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  reviewProduct,
  getProductReview,
  deleteReview,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");
const router = express.Router();
router.route("/");
router
  .route("/products")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getAllProducts);
router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorisedRoles("admin"), createProduct);
router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorisedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorisedRoles("admin"), deleteProduct);
router.route("/review").put(isAuthenticatedUser, reviewProduct);
router.route("/product/:id").get(getProductDetails);
router
  .route("/getreviews")
  .get(getProductReview)
  .delete(deleteReview, isAuthenticatedUser);

module.exports = router;
