const express = require('express');
const router = express.Router();

// Define routes here
router.get('/', (req, res) => {
  res.send('Test route');
});

module.exports = router; // Ensure this is exported as a router
