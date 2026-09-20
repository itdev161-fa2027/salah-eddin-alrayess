import express from "express";
import connectDatabase from "./config/db.js";
import { check, validationResult } from "express-validator";

const app = express();

connectDatabase();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post(
  "/api/users",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      return res.send(req.body);
    }
  }
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});