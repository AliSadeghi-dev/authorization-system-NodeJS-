const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://ali:12345@cluster0.v8vmkjb.mongodb.net/"
    );
    console.log("DB coneccted successful");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;
