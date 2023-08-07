function notFound (req, res, next) {
  res.send({
    statusCode: 404,
    message: "NotFound Page",
  });
};

function errorHandler(err, req, res, next) {
  const status = err?.status ?? err?.statusCode ?? 500;
  res.send({
    statusCode: status,
    message: err?.message ?? "inteernal server error",
  });
};

module.exports ={
    notFound,
    errorHandler
}
