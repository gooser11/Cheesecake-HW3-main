/**
 * Author: Rowena Archer
 */
const express = require('express');
const router = express.Router();

//JSON array
const orders = [
    { topping: 'Cherry', quantity: 2, month: 'Jan' },
    { topping: 'Chocolate', quantity: 1, month: 'Feb' },
  ];

// POST request to filter orders by month
router.post('/', (req, res) => {
  const { month } = req.body;

  const filteredOrders = orders.filter(order => order.month === month);
  res.json(filteredOrders);
});


module.exports = router;