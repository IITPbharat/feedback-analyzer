const express = require('express');
const router = express.Router();
const { analyzeFeedback } = require('../controllers/analyzeController');

router.post('/', analyzeFeedback);

module.exports = router;
