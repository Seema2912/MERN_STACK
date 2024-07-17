const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const db = require("./db");
const userRoute = require("./Routes/userRoutes");

dotenv.config({ path: path.join(__dirname, "./config.env") });
app.use(express.json());

app.use(cors());
app.options("*", cors());

app.use("/", userRoute);

db();


app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
