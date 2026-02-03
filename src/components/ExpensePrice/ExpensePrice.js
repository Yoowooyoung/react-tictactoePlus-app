import { useContext } from "react"
import { ExpenseContext } from "../../ExpenseContext"


const ExpensePrice = ({expense}) => {
  
    const { totalPrice } = useContext(ExpenseContext)
    return (
        <div>
            총지출: {totalPrice} 원
        </div>
  )
}

export default ExpensePrice