// React 라이브러리를 가져옵니다 (컴포넌트 만들기 위해 필요)
import React, { useContext, useEffect, useState } from 'react'
// react-icons 라이브러리에서 전송 아이콘(MdSend)을 가져옵니다
import { MdSend } from 'react-icons/md';
import "./ExpenseForm.css";
import { ExpenseContext } from '../../ExpenseContext';


const ExpenseForm =()=> {
    
    // charge, amount 저장
    const [charge, setCharge] = useState("")
    const [amount, setAmount] = useState(0)

    // category, month 저장
    const [category, setCategory] = useState("식비")
    const [month, setMonth] = useState(1)
    
    // 전역store에서 호출
    const {addExpense, updateExpense, editItem} 
    = useContext(ExpenseContext);
    
    // 실시간 확인
    useEffect(() => {
        if (editItem) {
            // 입력창 내용을 수정할 데이터로 채움
            setCharge(editItem.charge);
            setAmount(editItem.amount);
            setCategory(editItem.category);
            setMonth(editItem.month);
            
        }
    }, [editItem]);

    // 제출 클릭 시
    const handleSubmit =(e)=> {
        e.preventDefault();
        // 수정
        if(editItem) {
            // 새로운 배열 저장, {charge...} --> updateData()
            updateExpense(editItem.id, {charge, amount, category, month})
            setCharge("");   // 입력창 내용을 수정할 데이터로 채움
            setAmount(0);
            setCategory("식비");
            setMonth("1");
        } else {
        // 생성
        addExpense(charge, amount, category, month)
        setCharge("")
        setAmount(0)
        setCategory("식비")
        setMonth(1)
        }
    }

    return (
        <form onSubmit={handleSubmit}>  
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='charge'>지출 항목</label>
                    <input 
                        type="text"              // 텍스트 입력 (문자열)
                        className='form-control' // CSS 클래스명 (스타일링용)
                        id="charge"              // 고유 ID (label의 htmlFor와 연결)
                        name="charge"            // input의 이름
                        value={charge}
                        placeholder='예) 렌트비' // 입력 전 힌트 텍스트 (회색으로 표시)
                        onChange={(e)=>{setCharge(e.target.value)}}     // 이름 입력 감지
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>비용</label>
                    <input 
                        type="number"            // 숫자만 입력 가능 (키보드에 숫자 패드 표시)
                        className='form-control' // CSS 클래스명
                        id="amount"              // 고유 ID
                        name="amount"            // input의 이름
                        value={amount}
                        placeholder='예) 100'                        
                        onChange={(e)=>{setAmount(e.target.value)}}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='category'>카테고리</label>
                    <select 
                        className='form-control' // CSS 클래스명
                        id="category"              // 고유 ID
                        name="category"            // input의 이름
                        value={category}
                        onChange={(e)=>{setCategory(e.target.value)}}
                    >
                        <option>식비</option>
                        <option>이동비</option>
                        <option>문화생활비</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>월</label>
                    <select 
                        className='form-control' // CSS 클래스명
                        id="month"              // 고유 ID
                        name="month"            // input의 이름
                        value={month}
                        onChange={(e)=>{setMonth(e.target.value)}}
                    >
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
                        <option value="11">11월</option>                            <option value="12">12월</option>
                    </select>    
                </div>
            </div>
            {/* === 제출 버튼 === */}
            <button 
                type='submit'
                className='btn'
            >
                제출
                <MdSend className='btn-icon'/>
            </button>
        </form>
    )
}

export default ExpenseForm
