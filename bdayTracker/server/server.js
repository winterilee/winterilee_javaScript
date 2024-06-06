const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// require config mongoose
// require routes

app.listen(port, () => console.log(`Server is up and running on port ${port}`));