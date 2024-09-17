const express = require('express');
const router = express.Router();
const { searchPosts } = require('../controllers/redditController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/search', authMiddleware, searchPosts);

module.exports = router;
