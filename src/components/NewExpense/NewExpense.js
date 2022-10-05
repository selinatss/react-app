import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    return (
    <div class='new-expense'>
        <form>
            <ExpenseForm/>
        </form>
    </div>
    )
};


export default NewExpense;
