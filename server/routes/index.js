const router = require("express").Router();

router.use("/auth", require("./auth.routes"));

router.use("/users", require("./user.routes"));

router.use("/messages", require("./message.routes"));

module.exports = router;
