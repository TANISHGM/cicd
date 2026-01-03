const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 CI/CD Dynamic App is TOo!");
   res.send("🚀 CI/CD Dynamic App is TOo!");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
  console.log("App running on port 3000");
});
