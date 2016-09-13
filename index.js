var express = require("express");
var app = express();

//Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

//"/speak/pig" should print "The pig says 'Oink'" etc
app.get("/speak/:animalName", function (req, res){
    var animal = req.params.animalName;
    var animalSounds = {pig: "Oink", cow: "Moo", dog: "Woof Woof!", cat: "Meow"};
    if (animal in animalSounds) {
        res.send("The " + animal + " says '" + animalSounds[animal] + "'");
    } else {
        res.send("Sorry I don't know what sound the " + animal + " makes");
    }
});

//"/repeat/hello/3" should print "hello hello hello" and other repeated phrases
app.get("/repeat/:repeatPhrase/:repeatNum", function(req, res){
    var fullString = "";
    var repeatPhrase = req.params.repeatPhrase + " ";
    var repeatNum = parseInt(req.params.repeatNum);
    for (var i = 0; i < repeatNum; i++) {
        fullString += repeatPhrase; 
    }
    res.send(fullString.trim());
});

//Any other route should say "Sorry, page not found...What are you doing with your life?"
app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
    console.log("Serving assignment on port 3000");
});