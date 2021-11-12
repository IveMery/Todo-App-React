import React from 'react'

const Nav = ({ className, children }) => {
    return (
        <nav className={className}>
            {children}
        </nav>
    )
}

export default Nav
