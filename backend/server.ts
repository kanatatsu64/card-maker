import express from "express";

const app = express();
const port = 8080;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
