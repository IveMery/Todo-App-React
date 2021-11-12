import React from 'react'

const Container = ({className,role,children}) => {
    return (
        <div className={className} role={role}>
            {children}
        </div>
    )
}

export default Container
