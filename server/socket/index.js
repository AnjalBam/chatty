const { authMiddleware } = require("../middlewares/io");
const {
  getConversationsByUserId,
  createConversation,
} = require("../services/conversations");

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

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  });

  io.use(authMiddleware);
}

module.exports = useSocketIo;
