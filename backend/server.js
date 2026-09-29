const express = require("express");
require ("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("PingSpace API is running")
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    
});