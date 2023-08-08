const profileController = async (req, res, next) => {
  return res.send(req.user);
};

module.exports = {
  profileController,
};
