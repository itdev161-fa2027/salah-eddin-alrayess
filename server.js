import express from "express";

import connectDatabase from "./config/db.js";

const app = express();

connectDatabase();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});