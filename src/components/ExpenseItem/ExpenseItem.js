import React, { useContext } from 'react'
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from 'react-icons/md';
import { ExpenseContext } from '../../ExpenseContext';


const ExpenseItem = ({expense}) => {

    // 전역 store에서 가져오기
    const {handleEdit, handleDelete}
     = useContext(ExpenseContext)
    
    // 요소 출력
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
                    {expense.month} 월
                </span>
            </div>
            <div>
                {/* 수정 */}
                <button 
                    onClick={()=>handleEdit(expense.id)}
                    className='edit-btn'
                >   
                    <MdEdit />
                </button>
                {/* 삭제 */}
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

