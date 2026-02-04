import React, { useContext } from 'react'
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from 'react-icons/md';
import { ExpenseContext } from '../../ExpenseContext';

// 지출 항목 [수정, 삭제] 컴포넌트
const ExpenseItem = ({expense}) => {

    // 전역 store에서 가져오기
    const {handleEdit, handleDelete}
     = useContext(ExpenseContext)
    
    return (
        <li className='item'>
            <div className='info'>
                <span>
                    {expense.charge}
                </span>
                <span>
                    {expense.amount}원
                </span>
                <span>
                    카테고리: {expense.category}
                </span>
                <span>
                    {expense.date} 월
                </span>
            </div>
            <div>
                {/* 수정 아이콘*/}
                <button 
                    onClick={()=>handleEdit(expense.id)}
                    className='edit-btn'
                >   
                    <MdEdit />
                </button>
                {/* 삭제 아이콘*/}
                <button 
                    onClick={()=>handleDelete(expense.id)}
                    className='clear-btn' >
                    <MdDelete />
                </button> 
            </div>
        </li>
    )
}

export default ExpenseItem

