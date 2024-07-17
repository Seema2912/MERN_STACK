const express=require("express");
const{ createUser } =require("../controller/userController");
const router = express.Router();

router.route("/users").post(createUser);

module.exports = router;