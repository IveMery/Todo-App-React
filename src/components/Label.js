import React from 'react'

const Label = (forInputControl, children,) => {
    return (

        <label for={forInputControl}>
            {children}
        </label>
    );

}

export default Label
