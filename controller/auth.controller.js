const { userModel } = require("../model/user.model");
const {
  hashPassword,
  comparePassword,
  signToken,
} = require("../utils/managePassword");

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(404).json("user not found");
    }
    console.log(password, user.password);
    if (!comparePassword(password, user.password)) {
      return res.status(404).json("password or email not correct.");
    } else {
      const token = signToken({ id: user._id, email: user.email });
      res.status(200).json({ token, message: "login success" });
    }
  } catch (error) {
    next(error);
  }
};

const registerController = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await userModel.create({
      fullName,
      email,
      password: hashPassword(password),
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
