var db = require("../models");

module.exports = function (app) {

  app.post("/api/order", function (req, res) {
    db.WorkOrder.create(req.body).then(function (data) {
      res.json(data)
    })
  });

  app.get("/api/order", function (req, res) {
    db.WorkOrder.findAll({}).then(function (data) {
      res.json(data)
    });
  });









}