<<<<<<< HEAD
const express = require("express");
const routes = require("./routes");
const connectDB = require("./config/mongodb");
const app = express();

require("dotenv").config();

const port = process.env.PORT;

connectDB();

app.use(express.json());

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
=======
const express = require('express')
const routes = require('./routes')
const connectDB = require('./config/mongodb')
const app = express()

require('dotenv').config()

const port = process.env.PORT

connectDB()

app.use(express.json());

app.use("/api/v1",routes)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
>>>>>>> b15b488b6db2b15957bcdd0db010b3ec737a56a9
