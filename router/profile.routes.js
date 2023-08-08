const { Router } = require("express");
const { profileController } = require("../controller/profile.controller");


const router = Router();

router.get("/profile", profileController);

module.exports = {
  ProfileRoutes: router,
};
