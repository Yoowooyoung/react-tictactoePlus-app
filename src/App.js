// React에서 상태 관리를 위한 useState Hook을 가져옵니다
import { useState } from "react"
// CSS 스타일 파일을 가져옵니다
import "./App.css"
// 알림 메시지를 보여주는 컴포넌트
import Alert from "./components/Alert/Alert"
// 지출 항목을 입력하는 폼 컴포넌트
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
// 지출 목록을 보여주는 컴포넌트
import ExpenseList from "./components/ExpenseList/ExpenseList"
import ExpenseItem from "./components/ExpenseItem/ExpenseItem"
import { ExpenseProvider } from './ExpenseContext' 
import ExpensePrice from "./components/ExpensePrice/ExpensePrice"

// App.js: 전체 앱(최상위 부모 컴포넌트)
const App = () => {

    // // charge: 지출 항목 이름 (예: "렌트비", "교통비")
    // // 수정: setCharge: charge 값을 수정하는 함수
    // // State: 값을 기억
    // const [charge, setCharge] = useState("")

    // const [category, setCategory] = useState("")
    
    // // id: 수정 중인 항목의 고유 ID
    // const [id, setId] = useState('')
    
    // // amount: 지출 금액 (숫자) 
    // const [amount, setAmount] = useState(0)
    
    // // edit: 수정 모드인지 확인
    // const [edit, setEdit] = useState(false) // 수정 모드 OFF
    
    // // alert: 알림 메시지 상태 (show: 보일지 여부, type: 종류, text: 내용)
    // const [alert, setAlert] = useState({show: false})
    
    // // expenses: 모든 지출 내역을 담는 배열
    // // 각 항목은 {id, charge, amount} 형태의 객체
    // const [expenses, setExpenses] = useState([      
    //     // {id: , charge: "렌트비", amount: 2000},
    //     {id: 1, charge: "교통비", amount: 400},
    //     {id: 2, charge: "식비", amount: 1200},
    // ])
    // // 목록 지우기
    // const clearItems = () => {
    //     setExpenses([])  // 빈 배열로 설정 = 모두 삭제 (목록 지우기)
    // }
    
    // /*
    //  * handleCharge - 지출 항목 이름 입력 처리
    //  * (e): event - 입력 이벤트 객체
    //  * 사용자가 이름('렌트비')을 입력하면 실행
    //  */
    // // 지출항목 제출
    // const handleCharge = (e) => {
    //     console.log(e.target.value)  // 입력된 값 확인
    //     setCharge(e.target.value)     // charge(이름) 상태 업데이트
    // }

    // // 카테고리
    // const handleCategory = (e) => {
    //     console.log(e.target.value)
    //     setCategory(e.target.value)
    // }
    // /*
    //  * handleAmount - 지출 금액 입력 처리
    //  * (e): event - 입력 이벤트 객체
    //  * 사용자가 금액을 입력하면 실행
    //  */
    // const handleAmount = (e) => {
    //     console.log(e.target.valueAsNumber)
    //     // e.target.valueAsNumber: 입력값(가격)을 숫자로 변환
    //     setAmount(e.target.valueAsNumber)
    // }
    
    // // (id): 삭제클릭된 항목의 id값 받기
    // const handleDelete = (id) => {
    //     // filter: 조건에 맞는 항목만 남김 id:1 !== 1 (true면 남김)
    //     // id가 다른것만 새 배열로 반환
    //     const newExpenses = expenses.filter(expense => 
    //         expense.id !== id
    //     )
    //     console.log(newExpenses)  // 삭제 후 목록 확인
    //     setExpenses(newExpenses)  // 새 배열로 업데이트 
        
    //     // 삭제 완료 알림 표시
    //     // 실패시 Alert.js에 danger type: 'danger' 전달
    //     handleAlert({ 
    //         type: 'danger',
    //         text: '아이템이 삭제되었습니다.'
    //     })
    // }

    // const handleAlert = ({ type, text }) => {
    //     // 알림을 보이도록 설정
    //     setAlert({ show: true, type, text })
        
    //     // 7초 후 자동으로 알림 숨김
    //     setTimeout(() => {
    //         setAlert({ show: false })
    //     }, 7000)  // 7000ms = 7초
    // }

    // /**
    //  * handleEdit - 항목 수정 모드 시작
    //  * "수정" 버튼 클릭 시 실행됩니다
    //  */
    // const handleEdit = id => {
    //     // find: 조건에 맞는 첫 번째 항목 찾기
    //     // 수정하려는 항목의 데이터를 가져옴
    //     const expense = expenses.find(item => item.id === id)
        
    //     // 구조 분해 할당: expense 객체에서 charge, amount 추출
    //     const { charge, amount } = expense
    //     // 수정할 항목의 정보를 입력 필드에 채움
    //     setId(id)           // 어떤 항목을 수정 중인지 기억
    //     setCharge(charge)    // 항목 이름을 입력창에 표시
    //     setAmount(amount)    // 금액을 입력창에 표시
    //     setEdit(true)        // 수정 모드 ON
    // }

    // /**
    //  * handleSubmit - 제출 버튼 클릭 시(수정, 삭제)
    //  * "제출" 버튼 클릭 시 실행됩니다
    //  */
    // const handleSubmit = (e) => {
    //     // 페이지 새로고침 방지 (Refresh 방지)
    //     e.preventDefault()
    //     // [지출항목, 비용]: 항목 이름이 비어있지 않고, 금액이 0보다 큰지 확인
    //     if(charge !== "" && amount > 0) {
    //         // === 수정 모드인 경우 ===
    //         if (edit) {
    //             // map: expenses값 반복적으로 가져오기
    //             // 수정할 항목(id가 같은 것)만 새 데이터로 교체
    //             const newExpenses = expenses.map(item => {
    //                 // 삼항 연산자: 조건 ? 참일 때 : 거짓일 때
    //                 return item.id === id 
    //                     ? { ...item, charge, amount }  // 수정: 새 charge, amount로 교체
    //                     : item                         // 그대로 유지
    //             })
    //             setExpenses(newExpenses)  // 수정된 목록으로 업데이트
    //             setEdit(false)            // 수정 모드 종료
    //             // 수정 완료 알림, Alert.js에 'success'전달
    //             handleAlert({ 
    //                 type: 'success',  // 초록색 알림
    //                 text: "아이템이 수정되었습니다." 
    //             })
    //         // === 새로 추가하는 경우 ===
    //         } else 
    //             {
    //             // 새 지출 항목 객체 생성
    //             const newExpense = { 
    //                 id: crypto.randomUUID(),  // 랜덤의 ID 생성
    //                 charge: charge,           // 입력한 항목 이름
    //                 amount            // 입력한 금액
    //             }
                
    //             // 불변성 유지: 기존 배열을 직접 수정하지 않고 새 배열 생성
    //             // 전개 연산자 [...]: 기존 항목들 + 새 항목 (원본 유지 하기 위해)
    //             const newExpenses = [...expenses, newExpense]   // 얕은 복사, 기존의 Expenses에 새로운 객체 삽입 -> newExpenses
    //             setExpenses(newExpenses)  // 마지막으로 생성된 Expenses
    //             console.log(newExpense)
    //             // 추가 완료 알림
    //             handleAlert({ 
    //                 type: "success", 
    //                 text: "아이템이 생성되었습니다" 
    //             })
    //         }
            
    //         // 입력 필드 초기화 (다음 입력을 위해)
    //         setCharge("")   // 항목 이름 비우기   
    //         setAmount(0)    // 금액 0으로 초기화

    //     // 잘못된 입력
    //     }
    //      else {  
    //         console.log('error')  // 에러 출력
    //         // 에러 알림 표시
    //         handleAlert({
    //             type: 'danger',  // 빨간색 알림
    //             text: 'charge는 빈 값일수 없으며 amount는 0보다 커야 합니다.'
    //         })
    //     }
    // }

    return (
        // 전체 컨테이너 - 메인 영역
        <ExpenseProvider>
        <main className="main-container">   
            {/* {alert.show ? <Alert type={alert.type} text={alert.text}/> : null} */}
            <h1>가계부 </h1>
            <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
                <ExpenseForm  />
            </div >
            <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
                <ExpenseList />
            </div>
            <div style={{ 
                display: 'flex',           // Flexbox 레이아웃
                justifyContent: 'end',     // 오른쪽 정렬
                marginTop: '1rem'          // 위쪽 여백
            }}>
                <p style={{ fontSize: '2rem' }}>
                </p>
            </div>
            <div>
                <ExpensePrice />             
            </div>
        </main>
        </ExpenseProvider>
    )
}

// 이 컴포넌트를 다른 파일에서 import할 수 있도록 내보내기
export default App
