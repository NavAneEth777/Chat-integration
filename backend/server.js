const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("API is running");
})

app.listen(PORT, console.log("server listening on port", PORT));