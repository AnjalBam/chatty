const { authMiddleware } = require("../middlewares/io");
const { getConversationsByUserId } = require("../services/conversations");

function useSocketIo(io) {
  io.on("connection", async (socket) => {

    socket.emit('session', {
      userId: socket.userId
    })

    console.log("Connected ", socket.id);

    socket.emit("all_conversations", await getConversationsByUserId('UserId'))

    socket.on('messageInConversation', data => {
      console.log('data', data);
    })

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  });

  io.use(authMiddleware);
}

module.exports = useSocketIo;
