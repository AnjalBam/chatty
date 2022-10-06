const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.Mixed,
      ref: "Conversation",
    },
    content: {
      type: String,
      required: true,
    },
    sentBy: {
      type: mongoose.Schema.Types.Mixed,
      ref: "User",
    },
    readBy: {
      type: mongoose.Schema.Types.Mixed,
      ref: "User",
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", MessageSchema);
