import React, { useState } from 'react';
import { useGlobalContext } from '../../context/globalContext';

const Form = () => {
    const { addIncome } = useGlobalContext();
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addIncome({ title, amount, date, category, description, type });
        setTitle('');
        setAmount('');
        setDate('');
        setCategory('');
        setDescription('');
        setType('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" required />
            <button type="submit">Add Income</button>
        </form>
    );
};

export default Form;
