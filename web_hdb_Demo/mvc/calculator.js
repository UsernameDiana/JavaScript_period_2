var express = require("express");
var app = express();

// middleware
app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {
  var calculatorRequest = {
    operation: req.params.operation,
    n1: Number(req.params.n1),
    n2: Number(req.params.n2)
  }
  // making that has all the params from calkulatorRequest
  req.calk =calculatorRequest;
  next();
})

app.get("/api/calculator/*", function (req, res) {
  var calk = req.calk;
var calculation = eval(calk.n1 + calk.operation + calk.n2)
  res.send("calculator objects: " + calk.n1 + "  " + calk.operation + "  " + calk.n2 + "=" + calculation);
})

app.listen(3000, function () {
  console.log("Server started, listening on: " + 3000);
})

module.exports = app;