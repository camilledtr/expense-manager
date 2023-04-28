import { useState } from 'react';

import ExpensesContainer from "./components/Expenses/ExpensesContainer";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: '1', title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: '2', title: 'Toilet paper', amount: 94.12, date: new Date(2021, 1, 22) },
  { id: '3', title: 'New TV', amount: 799.49, date: new Date(2020, 11, 6) },
  { id: '4', title: 'New desk (wooden)', amount: 450, date: new Date(2020, 8, 17) },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesContainer items={expenses} />
    </>
  );
}

export default App;
