const express = require("express");
const morgan = require("morgan");

//express app
const app = express();

//listen for requests on port 3000
app.listen(3000);

//middleware & static Files
app.use(express.static("public"));
app.use(morgan("dev"));

// get handlers
app.get("/", (req, res) => {
  res.render("index");
});
