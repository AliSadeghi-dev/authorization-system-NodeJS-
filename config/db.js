const mongoose = require("mongoose");

const dbConnect = async() => {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb://localhost:27017/auth");
        console.log("DB coneccted successful");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = dbConnect;