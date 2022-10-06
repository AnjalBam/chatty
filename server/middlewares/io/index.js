const { verifyToken } = require("../../utils/jwt");

const authMiddleware = (socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    socket.emit("error", {message: "Unauthenticated Socket."})
    return next(new Error("No token provided."));
  }

  try {
    const payload = verifyToken(token);
    socket.user = payload;
    next();
  } catch (err) {
    next(new Error(`Invalid token: ${err.toString()}`));
  }
};

module.exports = {
  authMiddleware,
};
