import React, { createContext, useState } from 'react'
export const ExpenseContext = createContext();

export const ExpenseProvider = ({children}) => {
    
    // 배열: expenses
    const [expenses, setExpenses] = useState([
        {id: 1, charge: "돼지국밥", amount: 8000, category: "식비", month: 8},
        {id: 2, charge: "KTX", amount: 10000, category: "이동비", month: 8},
        {id: 3, charge: "영화", amount: 2500, category: "문화생활비", month: 4},
    ])

    const [editItem, setEditItem] = useState(null)

    // addExpense함수 --> expenses에 저장
    const addExpense =(charge, amount, category, month)=>{
        const newExpense = {
            id: crypto.randomUUID(),
            charge: charge,
            amount: Number(amount),
            category: category,
            month: Number(month),
        }
        setExpenses([...expenses, newExpense])
    }

    // 필터링한 배열(matchExpenses)
    const [matchExpenses, setMatchExpenses] = useState(expenses)
    // 필터링 함수
    const filterExpense =(filterCategory, filterMonth)=> {
        const matchExpense = expenses.filter((expense) => {
                const matchCategory = filterCategory === "all" || filterCategory === expense.category
                const matchMonth =  Number(filterMonth) === expense.month || filterMonth === "all"
            return matchCategory && matchMonth;
            })
        setMatchExpenses(matchExpense)
    }

    // 수정 (수정할 요소 찾기)
    const handleEdit =(id)=>{
        const handleEditItem = expenses.find((expense)=>
            expense.id === id
        )
        setEditItem(handleEditItem)
    }
    // 수정 (기존 요소에 수정할 내용으로 업데이트)
    const updateExpense = (id, updatedData) => {
        const newExpenses = expenses.map((expense) => {
            if (expense.id === id) {
                return { ...expense, ...updatedData };
            }
            return expense;
        });
        setExpenses(newExpenses);
        setEditItem(null);
        
    };

    // 모두 지우기
    const deleteAllList = (e) => {
        setExpenses([])
    }
    
    // 삭제 버튼
    const handleDelete = (id) => {
        const newExpenses = expenses.filter((expense) => {
            return (expense.id !== id)
        })  
        setExpenses(newExpenses)
    }
    
    // 금액 total
    const totalPrice = matchExpenses.reduce((acc, curr) =>{
        return (acc+= Number(curr.amount))
    }, 0)


    return (
        <ExpenseContext.Provider value={{
            // 배열
            matchExpenses,  // 필터링된 요소 배열
            expenses,       // 모든 요소 배열
            editItem,       //수정중인 아이템
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