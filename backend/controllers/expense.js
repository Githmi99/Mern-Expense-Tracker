// backend/controllers/expense.js
const Expense = require('../models/expensemodel');

const checkMonthlyExpenses = async (userId) => {
    const startOfMonth = new Date(new Date().setDate(1));
    const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

    const expenses = await Expense.find({
        userId: userId,
        date: { $gte: startOfMonth, $lte: endOfMonth }
    });

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

    const monthlyLimit = 1000; // Set your monthly limit here

    if (totalExpenses > monthlyLimit) {
        console.log('Monthly expense limit exceeded');
        // Implement actions if limit is exceeded, e.g., send notifications
    }
};

// Exporting function if you need to use it in other files
module.exports.checkMonthlyExpenses = checkMonthlyExpenses;

// Your existing controller functions
exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const userId = req.user._id;

    const expense = new Expense({
        userId,
        title,
        amount,
        category,
        description,
        date
    });

    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (amount <= 0 || typeof amount !== 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        await expense.save();
        res.status(200).json({ message: 'Expense Added' });

        await checkMonthlyExpenses(userId);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }

    console.log(expense);
};

exports.getExpense = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const expense = await Expense.findOneAndDelete({ _id: id, userId: req.user._id });
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense Deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
