const { Router } = require("express");
const { loginController, registerController } = require("../controller/auth.controller");

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);

module.exports = {
  Authroutes: router,
};
