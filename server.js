import express from "express";

import path from "path";
import { router } from "./routes/catsRoutes.js";

const app = express();

app.use(express.static("./client/build"));

app.use("/api/cats", router);

const __dirname = path.resolve();
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});
