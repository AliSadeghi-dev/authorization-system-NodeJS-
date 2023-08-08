const {Router} = require('express');
const { checkAuth } = require('../middlewares/checkAuth');
const {Authroutes} = require('./auth.routes');
const {ProfileRoutes} = require('./profile.routes');

const router = Router();
router.use("/auth",Authroutes);
router.use("/user", checkAuth, ProfileRoutes);

module.exports = {
  AllRoutes: router,
};