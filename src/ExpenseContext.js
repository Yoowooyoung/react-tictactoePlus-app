import React, { createContext, useState } from 'react'

// 전역상태
export const ExpenseContext = createContext();
export const ExpenseProvider = ({children}) => {
    
    // 배열: expenses
    const [expenses, setExpenses] = useState([
        {id: 1, charge: "돼지국밥", amount: 8000, category: "식비", date: 8},
        {id: 2, charge: "KTX", amount: 10000, category: "이동비", date: 8},
        {id: 3, charge: "영화", amount: 2500, category: "문화생활비", date: 4},
    ])

    // addExpense함수 --> expenses에 저장
    const addExpense =(charge, amount, category, date)=>{
        const newExpense = {
            id: crypto.randomUUID(),
            charge: charge,
            amount: Number(amount),
            category: category,
            date: Number(date),
        }
        setExpenses([...expenses, newExpense])
        handleAlert({ type: 'success', text: '아이템이 생성되었습니다.' });
    }

    // 필터링한 배열(matchExpenses)
    const [matchExpenses, setMatchExpenses] = useState(expenses)
    // 필터링 함수
    const filterExpense =(filterCategory, filterDate)=> {
        const matchExpense = expenses.filter((expense) => {
                // 카테고리, 월이 모두 조건에 만족해야하기 때문에 AND연산자 사용
                const matchCategory = filterCategory === "all" || filterCategory === expense.category
                const matchDate =  Number(filterDate) === expense.date || filterDate === "all"
            return matchCategory && matchDate;
            })
        setMatchExpenses(matchExpense)
    }

    // 수정하고 있는 데이터: editItme
    const [editItem, setEditItem] = useState(null)
    // 수정 (수정할 요소 찾기)
    const handleEdit =(id)=>{
        const EditItem = expenses.find((expense)=>
            expense.id === id
        )
        setEditItem(EditItem)
    }
    // 수정 (기존 요소에 수정할 내용으로 업데이트)
    const updateExpense = (id, updatedExpense) => {
        const newExpenses = expenses.map((expense) => {
            if (expense.id === id) {
                return {...updatedExpense};
            }
            return expense;
        });
        setExpenses(newExpenses);
        setEditItem(null);
        handleAlert({ type: 'success', text: '아이템이 수정되었습니다.' });
    };

    // 모두 지우기
    const deleteAllList = (e) => {
        setExpenses([])     // 빈 배열
        handleAlert({ type: 'danger', text: '아이템이 모두 삭제되었습니다.' });
    }

    // 삭제 버튼
    const handleDelete = (id) => {
        const newExpenses = expenses.filter((expense) => {
            return (expense.id !== id)
        })  
        setExpenses(newExpenses)
        handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.' });
    }
    
    // 금액 total
    const totalPrice = matchExpenses.reduce((acc, curr) =>{
        return (acc+= Number(curr.amount))
    }, 0)

    // 성공/실패 메시지
    const [alert, setAlert] = useState({show: false, type: '', text: ''})
    const handleAlert = ({type, text}) => {
        // true: ON, success/dnager: 메시지 색깔
        setAlert({ show: true, type, text})
        // 메시지 2초동안 보여줌, 다시 off, type, text 초기화
        setTimeout(()=> {
            setAlert({show: false, type: '', text: ''})
        }, 2000)
    }

    return (
        <ExpenseContext.Provider value={{
            // 배열
            matchExpenses,  // 필터링된 요소 배열
            expenses,       // 모든 요소 배열
            editItem,       //수정중인 아이템
            alert,          // alert메시지
            // 메소드
            addExpense,      // 배열에 새 요소 추가
            filterExpense,   // 필터링
            handleEdit,      // 수정 버튼
            updateExpense,   // 수정할 자료로 업데이트
            deleteAllList,   // 목록 지우기
            handleDelete,    // 삭제
            totalPrice,      // 가격 총합
        }}>
            {children}
        </ExpenseContext.Provider>
  )
}
