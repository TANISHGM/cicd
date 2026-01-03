const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>🚀 Deployed via CI/CD!</h1><p>${new Date()}</p>`);
});

app.listen(3000, () => console.log("App running on port 3000"));
