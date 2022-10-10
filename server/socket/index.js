const { authMiddleware } = require("../middlewares/io");
const {
  getConversationsByUserId,
  createConversation,
  getConversationById,
} = require("../services/conversations");
const { createMessage } = require("../services/messages");

function useSocketIo(io) {
  io.on("connection", async (socket) => {
    socket.emit("session", {
      userId: socket.userId,
    });

    console.log("Connected ", socket.id);

    async function emitConversations() {
      socket.emit(
        "all_conversations",
        await getConversationsByUserId(socket.userId)
      );
    }

    emitConversations();

    socket.on("new_conversation", async (data) => {
      const finalData = {};
      if (!data.name) finalData["name"] = "";

      finalData["participants"] = [socket.userId, ...data.participants];

      const newConv = await createConversation(finalData);

      if (newConv) {
        await emitConversations();
      }
    });

    socket.on("messageInConversation", (data) => {
      console.log("data", data);
    });

    socket.on("test", (data) => {
      console.log(data);
    });

    socket.on("new_message", async (data) => {
      const processedData = {};
      processedData['conversation'] = data.convId || "";
      processedData['content'] = data.message || "";
      processedData['sentBy'] = socket.userId;

      const conversation = await getConversationById(data.convId);

      try {
        const message = await createMessage(processedData);
        socket.emit('new_message', message);
      } catch (err) {
        socket.emit(new Error(err));
      }
    })

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  });

  io.use(authMiddleware);
}

module.exports = useSocketIo;
