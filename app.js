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
// const test = require("./api/route/auth.route");
const authRouter = require("./api/route/auth.route");
app.use("/auth",authRouter);
app.get("/", async (req, res) => {
  res.json("server is running succefully");
});

app.listen(PORT, async () => {
  console.log("server is running on port 5454");
});
