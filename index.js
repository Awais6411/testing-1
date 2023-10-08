const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/images", (req, res) => {
  res.send("Hello from Space! 🚀");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
