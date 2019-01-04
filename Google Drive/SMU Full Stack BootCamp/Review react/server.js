const express = require("express");
const mongoose = require("mongoose");

const app = express();
// Creates Http server

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
// app.use =  HTML do something
app.use(express.json());

app.use(express.static("client/public"));

const userRoutes = require("./routes/user.js");
app.use(userRoutes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactfullstack"
);

app.listen(PORT, function() {
  console.log("Connected on PORT: " + PORT);
});
