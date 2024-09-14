const mongoose = require('mongoose');
const colors = require("colors");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected successfully ${conn.connection.host}`.cyan.bold);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;