const { verifyToken } = require("../../utils/jwt");

const authMiddleware = (socket, next) => {
  const token = socket.handshake.auth.token;

  const err = new Error();
  err.data = { type: "unauthorized" };

  if (!token) {
    err.message = "No token provided.";
    return next(err);
  }

  try {
    const payload = verifyToken(token);
    socket.username = payload.username;
    socket.userId = payload.id;
    next();
  } catch (e) {
    err.message = `Invalid token: ${e.toString()}`;
    next(err);
  }
};

module.exports = {
  authMiddleware,
};
