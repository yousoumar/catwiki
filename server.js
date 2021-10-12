const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.static("./views/build"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server running on port " + port);
});
