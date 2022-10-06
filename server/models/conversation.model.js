const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      default: "",
    },
    participants: {
      type: [mongoose.Schema.Types.Mixed],
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
