import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './ExpensesContainer.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const ExpensesContainer = (props) => {
    const [yearFilterValue, setYearFilterValue] = useState('2023');
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFilterValue;
    })

    const updateYearFilterHandler = (selectedYear) => {
        setYearFilterValue(selectedYear);
    };

    return (
        <Card className='expenses-container'>
            <ExpenseFilter selectedYear={yearFilterValue} onUpdateYearFilter={updateYearFilterHandler} />
            <ExpensesChart items={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}
 export default ExpensesContainer;