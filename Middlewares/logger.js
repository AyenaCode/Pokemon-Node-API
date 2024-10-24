exports.logger = (req, res, next) => {
  console.log(`Url : ${req.url}`);
  next();
};
