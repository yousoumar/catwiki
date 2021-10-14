import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
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
app.get("/cats/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/?api_key=${process.env.APIKEY}`
    );

    const data = await response.json();
    const breed = data.find((breed) => breed.id === id);
    console.log(breed);
    res.json(breed);
  } catch (error) {
    console.log(error);
  }
});

const __dirname = path.resolve();
app.get("/*", (req, res) => {
  console.log(path.__dirname);
  res.sendFile(path.join(__dirname, "./views/build/index.html"));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server running on port " + port);
});
