import ExpensesContainer from "./components/Expenses/ExpensesContainer";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: 'Car insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet paper', amount: 94.12, date: new Date(2021, 1, 22) },
    { title: 'New TV', amount: 799.49, date: new Date(2020, 11, 6) },
    { title: 'New desk (wooden)', amount: 450, date: new Date(2020, 8, 17) },
  ]

  return (
    <>
      <h1 className="app-title">Let's manage our expenses!</h1>
      <NewExpense />
      <ExpensesContainer items={expenses} />
    </>
  );
}

export default App;
