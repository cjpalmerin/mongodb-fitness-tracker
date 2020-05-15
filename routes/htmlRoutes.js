const express = require('express');
const path = require("path");

router = express.Router();

module.exports = function (app) {

  router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


}