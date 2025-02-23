const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/process-message', messageController.processMessage);

module.exports = router;
