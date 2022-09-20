const User = require("../models/user.model");
const { generateToken } = require("../utils/jwt");
const { hashPassword } = require("../utils/password");

const register = async (req, res) => {
    const { username, password, fullName } = req.body;
    try {
        const pwd = hashPassword(password);
        await User.create({ username, password: pwd, fullName });
        return res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ message: "Internal Server Error", error });
    }
};

const login = (req, res) => {
    const { username, password } = req.body;
    try {
        User.findOne({ username })
            .then((user) => {
                if (!user) {
                    return res.status(404).send({ message: "User not found" });
                }

                if (!user.password === hashPassword(password)) {
                    return res.status(401).send({ message: "Unauthorized" });
                }

                const token = generateToken({
                    id: user._id,
                    username: user.username,
                });
                return res.send({ message: "Logged in successfully", token });
            })
            .catch((error) => {
                return res.status(404).send({ message: "Login", error });
            });
    } catch (error) {
        return res
            .status(500)
            .send({ message: "Internal Server Error", error });
    }
};

module.exports = {
    register,
    login,
};
