const express = require("express");
const userRoutes = require("./src/user/routes");
const app = express();
const PORT = process.env.SERVER_PORT || 3001;
const QWERT = process.env.DB_SECRET;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(`/${process.env.DB_SECRET}/api/v1/users`, userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
