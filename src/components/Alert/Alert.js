// components/Alert/Alert.js
import React, { useContext } from 'react'
import { ExpenseContext } from '../../ExpenseContext' // 경로 확인
import './Alert.css';

const Alert = () => {
    // 전역 상태에서 alert 정보 직접 꺼내기
    const { alert } = useContext(ExpenseContext);

    // show가 false면 화면에 아무것도 그리지 않음
    if (!alert.show) return null;

    return (
        <div className={`alert alert-${alert.type}`}>
            {alert.text}
        </div>
    )
}

export default Alert