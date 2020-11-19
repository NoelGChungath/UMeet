const express = require("express");
const app = express(); // creating app using express
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,(err) => !err ? console.log("Started Server") : console.log("Error Starting server")) //Starting server on enviroment port or 5000
app.use(express.static("public"));
