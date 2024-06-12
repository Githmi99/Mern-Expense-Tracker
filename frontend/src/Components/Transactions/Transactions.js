import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TransactionItem from './TransactionItem';

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('/api/transactions')
            .then(response => response.json())
            .then(data => setTransactions(data))
            .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    const deleteTransaction = (id) => {
        // Implement the delete functionality here if needed
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };

    return (
        <TransactionsStyled>
            <h2>Transactions</h2>
            <div className="transactions-list">
                {transactions.length > 0 ? (
                    transactions.map(transaction => (
                        <TransactionItem
                            key={transaction.id}
                            id={transaction.id}
                            title={transaction.title}
                            description={transaction.description}
                            amount={transaction.amount}
                            date={transaction.date}
                            type={transaction.type}
                            category={transaction.category}
                            indicatorColor={transaction.indicatorColor}
                            deleteItem={deleteTransaction}
                        />
                    ))
                ) : (
                    <p>No transactions found</p>
                )}
            </div>
        </TransactionsStyled>
    );
}

const TransactionsStyled = styled.div`
    padding: 2rem;
    .transactions-list {
        margin-top: 1rem;
    }
`;

export default Transactions;
