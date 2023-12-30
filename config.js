const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://127.0.0.1:27017/knovator");

const config = {
  secret: "your-secret-key-for-jwt",
  tokenExpiration: "1h",
  refreshTokenSecret: "your-refresh-token-secret",
  refreshTokenExpiration: "7d",
};

module.exports = {
  db,
  config,
};
