// ----- Setting up the server ----- //

// Requiring external module express and internal module (api.js)
const express = require("express");
const api = require("./api.cjs");
const port = 8884;

// App is the instance of the application server (express()).
const app = express();

// Injects middleware, recognizes incoming requests as JSON objects
app.use(express.json());

// 1. serve static files (images, CSS files, and JavaScript files) from directory named public (public folder)
// app.use("/", express.static("public"));

// 1. App uses route /api (.use -> purpose is to inject middleware) (so if it has path /api, use the api router middleware)
app.use("/api", api);

app.use("/", function(req, res) {
  console.log('default route');
  res.status(200).send({message: 'default route'});
})

// Run server and listen for requests at localhost:8884
const listener = app.listen(port, "localhost", function() {
  console.log(`connected to ${port}`);
});