import express from "express";
import * as process from "process";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get('/', (_req, res) => {
  res.send('Hi');
})
