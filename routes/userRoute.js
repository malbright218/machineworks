var db = require("../models");

module.exports = function (app) {

  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(data) {
        res.json(data)
    });
});

app.get("/api/user/:id", function(req, res) {
  db.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.json(data);
  });
});

  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (data) {
      res.json(data)
    })
  })









}