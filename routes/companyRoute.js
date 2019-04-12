var db = require("../models");

module.exports = function(app) {
   
  app.post("/api/company", function (req, res) {
    db.Company.create(req.body).then(function (data) {
      res.json(data)
    })
  })

  app.get("/api/company", function (req, res) {
    db.Company.findAll({
      include: [db.User]
    }).then(function (dbComp) {
      res.json(dbComp)
    });
  });

    app.get("/api/company/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Company.findOne({
          where: {
            id: req.params.id
          },
          include: [db.User]
        }).then(function(dbComp) {
          res.json(dbComp);
        });
      });



}