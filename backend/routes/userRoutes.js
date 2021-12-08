const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetail,
  updatePassword,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorities } = require("../middleware/auth");

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/passwordUpdate").put(isAuthenticatedUser, updatePassword);
router.route("/me").get(isAuthenticatedUser, getUserDetail);
module.exports = router;
