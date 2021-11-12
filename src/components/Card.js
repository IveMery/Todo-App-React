import React from 'react'

const Card = ({className,children}) => {
    return (
        <article className={className}>
            {children}
        </article>
    )
}

export default Card
