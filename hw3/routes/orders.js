const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Orders Page');
});

module.exports = router;