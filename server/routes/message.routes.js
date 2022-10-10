const { isAuthenticated } = require("../middlewares/auth.middleware");
const {
  getAllMessagesByConversationId,
} = require("../controllers/messages.controller");

const router = require("express").Router();

router.use(isAuthenticated);

router.get("/:convId/", getAllMessagesByConversationId);

module.exports = router;
