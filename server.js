import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import { router } from "./routes/catsRoutes.js";

dotenv.config();
const app = express();

app.use(express.static("./client/build"));
app.use(morgan("dev"));

app.use("/cats/", router);

const __dirname = path.resolve();
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server running on port " + port);
});
