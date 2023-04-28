import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import Button from '../UI/Button';

import './NewExpense.css';

const NewExpense = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const addExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsExpanded(false);
    };

    const toggleExpandedHandler = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div className='new-expense'>
            {!isExpanded && <Button onClick={toggleExpandedHandler} className='new-expense__button-big'>Add New Expense</Button>}
            {isExpanded &&
                <ExpenseForm onAddExpense={addExpenseHandler} onCancel={toggleExpandedHandler} />
            }
        </div>
    )
}

export default NewExpense;