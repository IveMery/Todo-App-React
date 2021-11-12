import React from 'react'

const Input = ({ type,value, name,placeholder,className,onChange }) => {
    return (
        <input
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
        />
    )
}

export default Input
