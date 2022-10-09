const Conversation = require("../models/conversation.model");

const getConversationsByUserId = async (userId) => {
  const conversations = await Conversation.find({
    participants: { $in: [userId] },
  }).populate('participants', "-password");
  return conversations;
};

const getConversationById = async (convId) => {
  return await Conversation.findById(convId);
};

const createConversation = async (data) => {
  const existingConversation = await Conversation.findOne({
    participants: data.participants,
  });
  if (existingConversation) {
    return null;
  }
  return await Conversation.create(data);
};

module.exports = {
  getConversationsByUserId,
  getConversationById,
  createConversation,
};
