import React, { useContext } from 'react'
import './Alert.css';
import { ExpenseContext } from '../../ExpenseContext';

// Alert.js: 생성, 삭제 메시지 표시(알림 컴포넌트)
const Alert = () => {
    const { alert } = useContext(ExpenseContext)

    return (
        <div className={`alert alert-${alert.type}`}>
            {alert.text}
        </div>
    )
}
export default Alert
