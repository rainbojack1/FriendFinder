//Routes
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});