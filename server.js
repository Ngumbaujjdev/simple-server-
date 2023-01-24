const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>hello world</h1>");
});
// using a diffrent route
app.get("/contact", function (request, respond) {
  respond.send("Thank you for contacting joshua john");
});
app.get("/about", function (req, res) {
  res.send(
    "my name is joshua john.Currently in catholic university of east africaa"
  );
});
// the listen express method
app.listen(3000, function () {
  console.log("server started on port 3000");
});
