import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2>No expense for that year.</h2>;
    } else {
        return (
            <ul className="expenses-list">
                {props.items.map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                })}
            </ul>
        )
    }
}

export default ExpensesList;