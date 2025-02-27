const express = require('express');
const router = express.Router();

//JSON array
const orders = [
    { topping: 'Cherry', quantity: 2, month: 'Jan' },
    { topping: 'Chocolate', quantity: 1, month: 'Feb' },
  ];

router.post('/', (req, res) => {
    var { month } = req.body;
    var filteredOrders = orders.filter(order => order.month === month);
    res.json(filteredOrders); //send the mf JSON now filtered by month
});

module.exports = router;