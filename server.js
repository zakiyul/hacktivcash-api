const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/hacktivcash", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
const product = require("./controllers/products")(app);

app.get("/", (req, res) => {
  res.send("Hello Express");
});
app.listen(3000, () => {
  console.log(`magic happen in http://localhost:3000`);
});
