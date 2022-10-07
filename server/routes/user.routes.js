const { isAuthenticated } = require('../middlewares/auth.middleware');
const {getAllUsers} = require('../controllers/user.controller')

const router = require('express').Router();

router.use(isAuthenticated);

router.get('/all', getAllUsers);

module.exports = router;