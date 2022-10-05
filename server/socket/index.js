function useSocketIo(io) {
  io.on("connection", (socket) => {
    console.log("Connected ", socket.id);
  });
}

module.exports = useSocketIo;
