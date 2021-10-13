import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.static("./views/build"));

app.get("/cats/", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/?api_key=${process.env.APIKEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server running on port " + port);
});
