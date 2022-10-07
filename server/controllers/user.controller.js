const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
    const users = await User.find();
    return res.status(200).send({message: 'All users fetched.', data: users})
}

module.exports = {
    getAllUsers,
}