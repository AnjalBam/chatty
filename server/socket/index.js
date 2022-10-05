function useSocketIo(io) {
  io.on("connection", () => {
    console.log("Connected");
  });
}

module.exports = useSocketIo;
