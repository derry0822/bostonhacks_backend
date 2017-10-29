var express = require("express");
var bodyParser = require("body-parser");
var convert = require('./public/js/converter.js');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.post("/form", function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
			first_name: req.body.first_name || null,
			last_name: req.body.last_name || null,
      age: req.body.age || null
		}));
  res.end();
  console.log(req.body);
});

app.listen(3000, function(){
  console.log("Live at Port 3000");
});

// Other Things
var file = require('./public/data/test.json');
convert(file);
