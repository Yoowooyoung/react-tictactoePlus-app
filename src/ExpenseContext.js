import React, { createContext, useState } from 'react'
export const ExpenseContext = createContext();

export const ExpenseProvider = ({children}) => {
  
    const [expenses, setExpenses] = useState([
        {id: 1, charge: "돼지국밥", amount: 8000, category: "식비", month: 8},
        {id: 2, charge: "KTX", amount: 10000, category: "이동비", month: 8},
        {id: 3, charge: "영화", amount: 2500, category: "문화생활비", month: 4},
    ])

    const [editItem, setEditItem] = useState(null)
    // const [filteredExpenses, setFilteredExpenses] = useState("")
    // const [filterAmount, setFilterAmount] = useState("all")

// 제출 -> 추가
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
    // 필터링 (카테고리, 월)
    const [matchExpenses, setMatchExpenses] = useState(expenses)

    const filterExpense =(filterCategory, filterMonth)=> {
        const matchExpense = expenses.filter((expense) => {
                const matchCategory = filterCategory === "all" || filterCategory === expense.category
                const matchMonth =  Number(filterMonth) === expense.month || filterMonth === "all"
            return matchCategory && matchMonth;
            })
        setMatchExpenses(matchExpense)
    }

    // 수정(수정할 요소 찾기)
    const handleEdit =(id)=>{
        const handleEditItem = expenses.find((expense)=>
            expense.id === id
        )
        setEditItem(handleEditItem)
    }
    // 수정 (새로운 값 저장)
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
    
    // 삭제
    const handleDelete = (id) => {
        const newExpenses = expenses.filter((expense) => {
            return (expense.id !== id)
        })  
        setExpenses(newExpenses)
    }

    // 모두 지우기
    const deleteAllList = (e) => {
        setExpenses([])
    }
    
    // 금액 total
    const totalPrice = matchExpenses.reduce((acc, curr) =>{
        return (acc+= Number(curr.amount))
    }, 0)

    return (
        <ExpenseContext.Provider value={{
            // 배열
            matchExpenses,  // 필터링된 요소만 담기
            expenses,       // 모든 요소 담기
            editItem,   //수정중인 아이템
            // 메소드
            addExpense,         // 배열에 새 요소 추가
            filterExpense,     // 
            handleEdit,     // 수정 버튼 함수
            updateExpense,   // 수정할 자료로 업데이트
            handleDelete,   // 삭제 함수
            totalPrice,      // 가격 총합
            deleteAllList,
        }}>
            {children}
        </ExpenseContext.Provider>
  )
}