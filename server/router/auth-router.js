const express=require("express");
const router=express.Router();

const authController=require("../controllers/auth-controller");

router.route("/api/auth").get(authController.home);

router.route("/api/auth/register").get(authController.register);

module.exports = router;