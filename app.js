const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
const app = express();
var items = ["wake up", "eat", "learn something"];
var work = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", function(req, res) {

day=date.getDate();
  res.render("list", {
    Title: day,
    Item: items
  });
});

app.get("/work", function(req,res) {
  res.render("list", {
    Title: "Work",
    Item: work
  });
});

app.get("/about",function(req,res){
  res.render("about");
});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  console.log(req.body);
  if (req.body.button === "Work") {
    work.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.listen(3000, function() {
  console.log("server started on port 3000");
});
