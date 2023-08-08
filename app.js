const express = require("express");
const { default: mongoose } = require("mongoose");
const dbConnect = require("./config/db");
const { AllRoutes } = require("./router/index.routes");
const { notFound, errorHandler } = require("./utils/errorHandler");

const app = express();

dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AllRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is runing at port 3000");
});
