const express = require("express");
const userRoutes = require("./src/user/routes");
const app = express();
const PORT = process.env.SERVER_PORT || 3001;
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: [
    "https://b1c849c5-8eba-45e0-8e6a-dfcf73f6745d-00-tblmp5ul2xcl.riker.replit.dev/", 
    "https://f8d59f01-e4ef-4ba3-9500-b0fe931750ab-00-ylebfj2olvum.worf.replit.dev/",
  ]
}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(`/${process.env.DB_SECRET}/api/v1/users`, userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
