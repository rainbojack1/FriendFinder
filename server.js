const express = require("express");
const fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8008;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//DATA
var friendList = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];

app.listen(PORT, function(){
    console.log("Listening on http://localhost:" + PORT);
});

app.post("/api/friends", function(req, res){
    console.log("req.body = ", req.body);
    newFriend = req.body;
    friendList.push(newFriend);
    fs.writeFile("./app/data/friends.json", JSON.stringify(friendList), function(err) {
        if (err) {
          return console.log(err);
        }
    });
    
});

require("./htmlRoutes.js")(app);
require("./apiRoutes")(app);
