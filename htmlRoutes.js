const path = require("path");

//Routes
module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "html/home.html"));
    });

    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "html/home.html"));
    });

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "html/survey.html"));
    });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "html/home.html"));
    });
};