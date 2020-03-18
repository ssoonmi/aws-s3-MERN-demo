const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const morgan = require('morgan');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(morgan('dev')); // very nice logger for debugging

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
