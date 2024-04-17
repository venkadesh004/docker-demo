const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.listen(3000, () => {
  console.log("Listening on server 3000");
})