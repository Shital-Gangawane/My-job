// middleware.js

const { isConnected } = require("../../db/db.js");

module.exports.checkDbConnection = (req, res, next) => {
  if (isConnected()) {
    next();
  } else {
    res
      .status(500)
      .json({ message: "Database connection is not established yet." });
  }
};
