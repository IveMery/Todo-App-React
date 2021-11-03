import React from 'react'

const Button = ({ children, title, onClick }) => {

    return (
        <div className={className} onClick={onClick}>
            {children}
            {title}
        </div>
    )
}

export default Button
