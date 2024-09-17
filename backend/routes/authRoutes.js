const express = require('express');
const { register, login } = require('../controllers/authController');
const validationMiddleware = require('../middleware/validationMiddleware');
const userSchema = require('../schemas/userSchema');

const router = express.Router();

router.post('/register', validationMiddleware(userSchema), register);
router.post('/login', validationMiddleware(userSchema), login);

module.exports = router;
