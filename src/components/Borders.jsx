import React from 'react'

const Borders = ({ children }) => {
    return (
        <div className='shadow-lg rounded-md p-2 text-center'>
            <h6>{children}</h6>
        </div>
    )
}

export default Borders