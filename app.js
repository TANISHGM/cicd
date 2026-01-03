const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Health check (very important for DevOps)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", time: new Date() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
