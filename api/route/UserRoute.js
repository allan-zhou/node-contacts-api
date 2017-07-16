const express = require('express');
const User = require('../controller/UserController');

const router = express.Router();

router.get('/', User.getUsers);

export default router;
