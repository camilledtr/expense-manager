import { useState } from 'react';
import './ExpenseForm.css';
import Button from '../UI/Button';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: e.target.value}
        });
    };

    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: e.target.value}
        });
    };

    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: e.target.value}
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onAddExpense(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} required />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler} required />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' value={userInput.enteredDate} onChange={dateChangeHandler} required />
                </div>
            </div>
            <div className='new-expense__actions'>
                <Button type='button' onClick={props.onCancel}>Cancel</Button>
                <Button type='submit'>Add new expense</Button>
            </div>
        </form>
    )
}

export default ExpenseForm;