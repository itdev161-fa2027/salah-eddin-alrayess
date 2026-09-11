import express from "express";
import connectDatabase from "./config/db.js";

const app = express();

connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});