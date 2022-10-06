const Conversation = require("../models/conversation.model");

const getConversationsByUserId = async (userId) => {
  const conversations = await Conversation.find({
    participants: { $in: [userId] },
  });
  return conversations;
};

const getConversationById = async (convId) => {
  return await Conversation.findById(convId);
};

module.exports = {
  getConversationsByUserId,
  getConversationById,
};
