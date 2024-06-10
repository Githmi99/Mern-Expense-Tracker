const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
    console.log(req.body)
    const { title, amount, Category, description, date } = req.body;

    try {
        // Validations
        if (!title || !Category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (amount <= 0 || typeof amount !== 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number' });
        }

        const income = new IncomeSchema({
            title,
            amount,
            Category,
            description,
            date
        });

        await income.save();
        console.log('Income added:', income);
        res.status(200).json({ message: 'Income Added' });

    } catch (error) {
        console.error('Error adding income:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: 'Income Deleted' });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Server Error' });
        });
};
