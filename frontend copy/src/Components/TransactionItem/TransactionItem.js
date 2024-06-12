import React from 'react';
import styled from 'styled-components';

function TransactionItem({ id, title, description, amount, date, type, category, indicatorColor, deleteItem }) {
    return (
        <TransactionItemStyled indicator={indicatorColor}>
            <div className="icon" style={{ background: indicatorColor }}></div>
            <div className="details">
                <h5>{title}</h5>
                <p>{description}</p>
                <small>{new Date(date).toLocaleDateString()}</small>
                <div className="amount">${amount}</div>
                <button onClick={() => deleteItem(id)}>Delete</button>
            </div>
        </TransactionItemStyled>
    );
}

const TransactionItemStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    .icon {
        width: 10px;
        height: 100%;
        border-radius: 5px;
        margin-right: 1rem;
    }
    .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        h5 {
            font-size: 1rem;
        }
        p {
            font-size: 0.875rem;
            color: #999;
        }
        small {
            color: #999;
        }
        .amount {
            font-size: 1rem;
            font-weight: 700;
        }
        button {
            background: transparent;
            border: none;
            color: #f00;
            cursor: pointer;
        }
    }
`;
