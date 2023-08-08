const { genSaltSync, hashSync, compareSync} = require("bcrypt");
const secret="adjfgkjsdflkgnaldfmskdnfksndflgknsdfgn";
const jwt = require("jsonwebtoken");

function hashPassword(password){
    const salt = genSaltSync(10);
    return hashSync(password,salt)
}

function comparePassword(password, hashed){
    return compareSync(password, hashed)
}

function signToken(payload){
    return jwt.sign(payload,secret)
}

function verifyToken(payload) {
  return jwt.verify(payload, secret);
}

module.exports={
    hashPassword,
    comparePassword,
    signToken,
    verifyToken
}