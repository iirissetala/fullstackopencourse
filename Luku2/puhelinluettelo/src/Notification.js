import React from 'react'

const Notification = ({errorMessage, message, show}) => {

    if (message === null){
        return null
    }
    if (errorMessage !== null)
        return (
            <div>
                {show && <div className='errormessage'> {errorMessage} </div>}
            </div>
    )
    if (message !== null){
        return (
            <div>
                {show && <div className='message'> {message} </div>}
            </div>
        )

    }
}

export default Notification