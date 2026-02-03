import React from 'react'
import './Alert.css';

// Alert.js: 생성, 삭제 메시지 표시(알림 컴포넌트)
const Alert = ({ type, text }) => {
    return (
        <div className={`alert alert-${type}`}>{text}</div>
    )
}
export default Alert

// 성공시: ="alert alert-success"
// 실패시: ="alert alert-danger"