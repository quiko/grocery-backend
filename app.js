const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const keys = require("./config/keys.js");
const mealsRouter = require("./routes/meals");
const groceriesRouter = require("./routes/groceries");

// Allow use of env vars in .env file
require("dotenv/config");

//Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(
  keys.mongodb.dbUrl,
  { useNewUrlParser: true, useCreateIndex: true },
  //process.env.MONGODB,

  error => {
    error === null ? console.log("connected to db") : error;
  }
);

//Middlwares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//disable caching
app.disable("etag");

//Routes
app.get("/");
app.use("/api",mealsRouter);
app.use("/api", groceriesRouter);

//Start the server
const port = process.env.PORT || 5000;
app.listen(port);
`Server listening at ${port}`;