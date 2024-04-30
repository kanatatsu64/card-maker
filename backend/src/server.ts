import express from "express";

const app = express();
const port = 8081;

app.use("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
