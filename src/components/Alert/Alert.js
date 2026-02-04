import React, { useContext } from 'react'
import './Alert.css';
import { ExpenseContext } from '../../ExpenseContext';

// 메시지 컴포넌트
const Alert = () => {

    // 전역상태에서 'text'가 담겨있는 'alert객체' 가져오기
    const { alert } = useContext(ExpenseContext)

    return (
        <div className={`alert alert-${alert.type}`}>
            {alert.text}
        </div>
    )
}
export default Alert
