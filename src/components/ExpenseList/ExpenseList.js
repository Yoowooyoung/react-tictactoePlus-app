import React, { useContext, useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import './ExpenseList.css';
import {ExpenseContext} from '../../ExpenseContext';
import ExpenseItem from '../ExpenseItem/ExpenseItem'

// 목록지우기, 조회 컴포넌트
const ExpenseList = () => {

    // 전역상태에서 가져오기
    const {expenses, filterExpense, matchExpenses, deleteAllList}
    = useContext(ExpenseContext)

    // 필터링된 [category, date] 저장
    const [filterCategory, setFilterCategory] = useState("all")
    const [filterDate, setFilterDate] = useState("all")

    // 조회 항목 클릭 시 동작
    useEffect(() => {
        filterExpense(filterCategory, filterDate);
        // 의존성 배열 하나라도 변경 시 동작
    }, [filterCategory, filterDate, expenses]);

    // 조회 시
    const filterSubmit=(e)=> {
        e.preventDefault();
    filterExpense(filterCategory, filterDate)
    }

    return (
        <React.Fragment>
            <button 
                onClick={()=>deleteAllList()}
                className='btn'
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
                            className="form-control"
                            id="filterCategory"
                            name="filterCategory"
                            value={filterCategory}
                            onChange={(e)=>{setFilterCategory(e.target.value)}} >
                                <option value="all">all</option>
                                <option>식비</option>
                                <option>이동비</option>
                                <option>문화생활비</option>
                        </select>    
                    </div>
                    <div className='form-group'>
                        <label htmlFor='filterDate'>월별 조회</label>
                        <select 
                            className="form-control"
                            id="filterDate"
                            name="filterDate"
                            value={filterDate}
                            onChange={(e)=>{setFilterDate(e.target.value)}} >
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
                {/* ExpenseItem컴포넌트에 expenses배열 요소 하나씩 보내기 */}
                {matchExpenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />))}
            </ul>
        </React.Fragment>
    )
}

export default ExpenseList

