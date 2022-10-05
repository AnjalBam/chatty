const express = require("express");

const app = express();

const cors = require("cors");
const morgan = require("morgan");
const http = require("http");
const socketIO = require("socket.io");

const server = http.createServer(app);

require("dotenv").config();

const { setupDb } = require("./db/setupDb");

const port = process.env.PORT || 4000;

const io = socketIO(server);

const useSocketIo = require("./socket");

useSocketIo(io);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  res.send({ message: "Hello! I'm Chatty." });
});

app.use("/api/v1", require("./routes"));

setupDb();

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;
