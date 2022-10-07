const { verifyToken } = require("../utils/jwt");

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .send({ message: "Unauthorized", error: "No token provided" });
  }
  try {
    const tokenPart = token.toString().split(" ")[1]
    const decoded = verifyToken(tokenPart);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized", error });
  }
};

module.exports = {
  isAuthenticated,
};
