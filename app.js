const express = require("express");
const morgan = require("morgan");

//express app
const app = express();

// connect to mongodb
const dburi =
  "mongodb+srv://anton12:607bce@fooddb.egp8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// register view engine
app.set("view engine", "ejs");

//listen for requests on port 3000
app.listen(3000);

//middleware & static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use(morgan("dev"));

// get handlers
app.get("/", (req, res) => {
  res.render("index");
});

// 404 page
app.use((req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.status(404).render("404", { title: "404", blogs });
});
// EJS Templates are processed through the EJS view engine on the server.  This whole process is called server side rendering.
