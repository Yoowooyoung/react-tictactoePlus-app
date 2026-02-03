import React, { useContext } from 'react'
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from 'react-icons/md';
import { ExpenseContext } from '../../ExpenseContext';


// ExpenseItem - 개별 지출 항목을 표시하는 컴포넌트(수정 버튼, 삭제 버튼)
const ExpenseItem = ({expense}) => {

    const {handleEdit, handleDelete} = useContext(ExpenseContext)
    
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
                <button 
                    onClick={()=>handleEdit(expense.id)}
                    className='edit-btn'
                >   
                {/* 수정 */}
                    <MdEdit />
                </button>
                {/* 삭제 */}
                <button 
                    onClick={()=>handleDelete(expense.id)}
                    className='clear-btn' >
                    {/* onClick={() => 
                        handleDelete(expense.id)
                    }> */}
                    <MdDelete />
                </button> 
            </div>
        </li>
    )
}
// 이 컴포넌트를 다른 파일에서 import할 수 있도록 내보내기
export default ExpenseItem

