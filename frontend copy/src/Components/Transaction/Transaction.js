import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import TransactionItem from '../TransactionItem/TransactionItem';
import { InnerLayout } from '../../styles/Layout';

function Transactions() {
    const { transactions, getTransactions, deleteTransaction, totalTransactions } = useGlobalContext();

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <TransactionStyled>
            <InnerLayout>
                <h1>Transactions</h1>
                <h2 className="total-transaction">Total Transactions: <span>${totalTransactions()}</span></h2>
                <div className="transaction-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="transactions">
                        {transactions.length > 0 ? (
                            transactions.map((transaction) => {
                                const { _id, title, amount, date, category, description, type } = transaction;
                                return (
                                    <TransactionItem
                                        key={_id}
                                        id={_id}
                                        title={title}
                                        description={description}
                                        amount={amount}
                                        date={date}
                                        type={type}
                                        category={category}
                                        indicatorColor="var(--color-blue)"
                                        deleteItem={deleteTransaction}
                                    />
                                );
                            })
                        ) : (
                            <p>No transactions available</p>
                        )}
                    </div>
                </div>
            </InnerLayout>
        </TransactionStyled>
    );
}

const TransactionStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-transaction {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-blue);
        }
    }
    .transaction-content {
        display: flex;
        gap: 2rem;
        .transactions {
            flex: 1;
        }
    }
`;

export default Transactions;