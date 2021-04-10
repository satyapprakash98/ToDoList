const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=[];
app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();

  var options = {
    weekday:"long",
    day : "numeric",
    month : "long"
  };
    var day = today.toLocaleDateString('en-US',options);
  res.render('list', {
    kindOfDay: day,
    NewListItem:items
  });
})


app.post('/',function(req,res){
  var item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});


app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
