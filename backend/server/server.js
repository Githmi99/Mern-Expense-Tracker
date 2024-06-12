// backend/server.js
require('dotenv').config();
const express = require('express');
const app = express();
const expenseRoutes = require('./routes/expenseRoutes');

// Middleware and other configurations
app.use(express.json());
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
