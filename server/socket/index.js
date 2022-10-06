const { authMiddleware } = require("../middlewares/io");

function useSocketIo(io) {
  io.on("connection", (socket) => {
    console.log("Connected ", socket.id);

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  });

  io.use(authMiddleware);
}

module.exports = useSocketIo;
