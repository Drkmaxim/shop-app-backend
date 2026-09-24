const user = require("../data/user");

const login = (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(400).json("Missing email and password");
    }
    if(!email) {
        return res.status(400).json("Enter an email");
    }
    if(!password) {
        return res.status(400).json("Invalid password");
    }
    return res.json({email:email, password:password, message: "Successful operation"});
}

const register = async (req, res) => {
    try {
        const {email, password, confirmPassword} = req.body;
        console.log(email, password);
        if(!email || !password || !confirmPassword) {
            return res.status(400).json("Email and password required");
        }
        if(password !== confirmPassword) {
            return res.status(400).json("Password mismatch");
        }
        if (await user.findOne({email})) {
            return res.status(400).json("User already exists");
        }
        await user.create({email: email, password: password});
        console.log("User created successfully");
        return res.status(200).json("User created successfully");
    } catch(error) {
        console.error("Unable to register");
        res.status(500).json("Registration error");
    }
}

module.exports = {login, register};