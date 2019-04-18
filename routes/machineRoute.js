var db = require("../models");

module.exports = function (app) {

    app.post("/api/machine", function (req, res) {
        db.Machine.create(req.body).then(function (data) {
          res.json(data)
        })
      })
    
      app.get("/api/machine", function (req, res) {
        db.Machine.findAll({
        }).then(function (data) {
          res.json(data)
        });
      });









}