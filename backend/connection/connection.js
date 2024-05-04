const mongoose = require("mongoose");
require("dotenv").config();
const dbURL = process.env.DB_URL;

const conn = async (req, res) => {
    try {
        await mongoose.connect(dbURL)
            .then(() => {
                console.log("db is connected")
            })
    } catch (error) {
        res.status(400).json({
            message: "Not connected"
        })
    }
};
conn();