const { CustomError } = require("../errors/costum-error");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "try again later" });
};

module.exports = errorHandler;
