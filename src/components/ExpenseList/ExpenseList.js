import React, { useContext, useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import './ExpenseList.css';
import {ExpenseContext} from '../../ExpenseContext';
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpensePrice from '../ExpensePrice/ExpensePrice';

const ExpenseList = () => {
    const {expenses, filterExpense, matchExpenses, deleteAllList} = useContext(ExpenseContext)

    console.log("필터링된 배열",matchExpenses)

    const [filterCategory, setFilterCategory] = useState("all")
    const [filterMonth, setFilterMonth] = useState("all")

    useEffect(() => {
        filterExpense(filterCategory, filterMonth);
        }, [filterCategory, filterMonth, expenses]);
        const filterSubmit=(e)=> {
            e.preventDefault();
        filterExpense(filterCategory, filterMonth)
    }

    const clearItem=(e)=> {
        e.preventDefault();
        deleteAllList();
    }

    return (
        <React.Fragment>
            <button 
                onClick={clearItem}
                className='btn'
                // onClick={clearItems}
            >
                목록 지우기
                <MdDelete />
            </button>

            <form onSubmit={filterSubmit}>
            <div 
                className="filter-container" >
                <div className='form-group'>
                        <label htmlFor='filterCategory'>카테고리 조회</label>
                        <select 
                            id="filterCategory"              // 고유 ID
                            name="filterCategory"            // input의 이름
                            value={filterCategory}
                            onChange={(e)=>{setFilterCategory(e.target.value)}} >
                                <option value="all">all</option>
                                <option>식비</option>
                                <option>이동비</option>
                                <option>문화생활비</option>
                        </select>    
                    </div>
                    <div className='form-group'>
                        <label htmlFor='filterMonth'>월 조회</label>
                        <select 
                            id="filterMonth"              // 고유 ID
                            name="filterMonth"            // input의 이름
                            value={filterMonth}
                            onChange={(e)=>{setFilterMonth(e.target.value)}} >
                                <option value="all">all</option>
                                <option value="1">1월</option>
                                <option value="2">2월</option>
                                <option value="3">3월</option>
                                <option value="4">4월</option>
                                <option value="5">5월</option>
                                <option value="6">6월</option>
                                <option value="7">7월</option>
                                <option value="8">8월</option>
                                <option value="9">9월</option>
                                <option value="10">10월</option>
                                <option value="11">11월</option>
                                <option value="12">12월</option>
                        </select>    
                    </div>
                </div>
                </form>
            <ul>
                {matchExpenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />))}
            </ul>
        </React.Fragment>
    )
}

export default ExpenseList

