// backend/routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expense');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/add-expense', authenticateToken, expenseController.addExpense);
router.get('/get-expense', authenticateToken, expenseController.getExpense);
router.delete('/delete-expense/:id', authenticateToken, expenseController.deleteExpense);

module.exports = router;
