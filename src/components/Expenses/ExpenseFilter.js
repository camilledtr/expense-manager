import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const selectedYear = props.selectedYear;

    const updateYearFilterHandler = (e) => {
        props.onUpdateYearFilter(e.target.value);
    };

    return (
        <div className='expenses-filter'>
            <label className='expenses-filter__label'>Filter by year</label>
            <select className='expenses-filter__dropdown' value={selectedYear} onChange={updateYearFilterHandler}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;