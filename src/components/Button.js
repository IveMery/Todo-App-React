import React from 'react'

const Button = ({ children, className, onClick,onSubmit }) => {
    return (
        <button className={className} onClick={onClick} onSubmit={onSubmit}>{children}</button>
    )
}

export default Button
