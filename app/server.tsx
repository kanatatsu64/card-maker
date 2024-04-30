import express from "express";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";

import App from "../component/App";

const app = express();
const port = 8080;

app.use("/", (request, response) => {
  const { pipe } = renderToPipeableStream(<App />, {
    onShellReady() {
      response.setHeader("content-type", "text/html");
      pipe(response);
    },
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
