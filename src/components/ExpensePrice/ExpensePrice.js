import { useContext } from "react"
import { ExpenseContext } from "../../ExpenseContext"


const ExpensePrice = () => {
    // 전역상태에서 가져오기
    const { totalPrice } = useContext(ExpenseContext)
    return (
        <div>
            총지출: {totalPrice} 원
        </div>
  )
}

export default ExpensePrice