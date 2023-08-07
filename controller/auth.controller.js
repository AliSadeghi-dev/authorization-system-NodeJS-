const { userModel } = require("../model/user.model");

const loginController = (req, res, next) => {
  res.send("login system");
};

const registerController = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await userModel.create({
      fullName,
      email,
      password,
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
  registerController,
};
