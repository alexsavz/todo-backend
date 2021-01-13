const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json("response");
});

app.listen(3200, () => console.log('Server On'));

