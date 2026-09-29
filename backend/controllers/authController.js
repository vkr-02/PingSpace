const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    return res.status(201).json({
        message: "User registered successfully"
    });
};

module.exports = {
    signUp
}