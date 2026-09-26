const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("PingSpace API is running")
});

app.post("/api/auth/signup", (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    console.log(username, email);
    
    return res.status(201).json({
        message: "User registered successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    
});