import React from 'react'

const Alert = ({alert}) => {
    return (
        alert!=null &&(
            <div className={`danger alert-${alert}`}>
                <i className='fas fa-info-circle'> Pls enter something in the input field</i>

            </div>
        )
    )
}
export default Alert;