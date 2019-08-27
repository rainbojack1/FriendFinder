const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8008;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function(){
    console.log("Listening on http://localhost:" + PORT);
});

