import express from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import { router } from "./routes/api.js";

dotenv.config();
const app = express();

app.use(express.static("./views/build"));
app.use(morgan("dev"));

app.use("/cats/", router);

const __dirname = path.resolve();
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/build/index.html"));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server running on port " + port);
});
