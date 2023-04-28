import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './ExpensesContainer.css';

const ExpensesContainer = (props) => {
    return (
        <Card className='expenses-container'>
            {props.items.map((expense, index) => {
                return <ExpenseItem
                    key={index}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            })}
        </Card>
    )
}
 export default ExpensesContainer;