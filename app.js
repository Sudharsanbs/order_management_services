const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 5454;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);
const test = require("./api/route/auth.route");
app.use("/auth",test)
app.get("/", async (req, res) => {
  res.json("server is running");
});

app.listen(PORT, async () => {
  console.log("server is running on port 5454");
});
