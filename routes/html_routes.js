var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/portal", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/portal.html"))
    })

    app.get("/setup", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/setup.html"))
    })

    app.get("/newuser", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/newuser.html"))
    })
   
};