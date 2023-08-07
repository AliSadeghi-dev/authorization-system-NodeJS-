const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{type:String},
    email:{type:String},
    password:{type:String}
},{
    timestamps:true
});

const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
};