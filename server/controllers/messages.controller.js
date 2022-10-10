const Message = require("../models/message.model");

async function getAllMessagesByConversationId(req, res) {
  const convId = req.params.convId;
  if (!convId) {
    return res.status(400).send({
      message: "No Conversation ID Provided",
    });
  }
  try {
    const messages = await Message.find({ conversation: convId }).sort({
      createdAt: 1,
    }).populate("sentBy", "fullName username");
    return res.status(200).send({
      message: "Conversation messages fetched successfully.",
      data: messages,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Some error occured fetching messages.",
      error: err,
    });
  }
}

module.exports = {
  getAllMessagesByConversationId,
};
