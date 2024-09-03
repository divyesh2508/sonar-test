// controllers/api/v1/index.js
const express = require('express');
const router = express.Router();
const testController = require('./test'); // Ensure this is a middleware function

router.use('/test', testController);

module.exports = router;
