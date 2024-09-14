const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const userRoutes = require('./routes/userRoutes')
dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
    res.send("API is running");
})

app.use("/api/user", userRoutes)

//error handling functions!
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log("server listening on port", PORT.yellow.bold));