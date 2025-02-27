const express = require('express');
const router = express.Router();

//JSON array
const orders = [
    { topping: 'Cherry', quantity: 2 },
    { topping: 'Chocolate', quantity: 1 },
  ];

router.get('/', (req, res) => {
    res.send(orders); //send the mf JSON
});

module.exports = router;