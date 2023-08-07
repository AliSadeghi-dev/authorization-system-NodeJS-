const express = require("express");
const { default: mongoose } = require("mongoose");
const dbConnect = require("./config/db");
const { AllRoutes } = require("./router/index.routes");
const { notFound, errorHandler } = require("./utils/errorHandler");

const app = express();
mongoose
  .connect("mongodb://localhost:27017/auth",(err)=>{
    console.log(err? err.message : "connected to db");
  })
dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AllRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is runing at port 3000");
});
