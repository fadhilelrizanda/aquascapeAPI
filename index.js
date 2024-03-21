const deviceRoute = require("./routes/device");
const contrlRoute = require("./routes/control");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const cors = require("cors");

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected!");
});
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use(express.json());
// const routes = require("./rout es/routes");
app.use("/device", deviceRoute);
app.use("/control", contrlRoute);

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
