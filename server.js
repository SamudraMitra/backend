const DATABASE_URL = "mongodb://localhost:27017/gfghackathon";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Patient = require("./schemas/patient");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb" + err));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server listening on Port" + PORT);
});
app.get("/", async (req, res) => {
  const data = await Patient.find();
  res.send(data);
});
