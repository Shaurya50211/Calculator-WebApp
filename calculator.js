const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/bmiCalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = Math.floor(weight/(height*height))
    res.send(`<h1>Your BMI ${bmi}</h1>`);
})

app.post("/", function (req, res) {
    var sum = Number(req.body.num1) + Number(req.body.num2);
    res.send(`<h1>${sum}</h1>`)
})

app.listen("3000", function () {
    console.log("server started at port 3000")
})