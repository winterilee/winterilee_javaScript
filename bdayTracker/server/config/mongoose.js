const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1/bday_tracker", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to DB."))
    .catch((err) => console.log("Failed to connect to DB: ", err));