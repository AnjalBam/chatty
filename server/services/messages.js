const Message = require('../models/message.model');


const createMessage = async (data) => {
    try {
        const message = await Message.create(data);
        return message;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    createMessage,
}