import React from 'react'

const Notification = ({errorMessage, message, show}) => {

    if (message === '' && errorMessage === '') {
        return null
    }
    if (errorMessage !== '')
        return (
            <div>
                {show && <div className='errormessage'> {errorMessage} </div>}
            </div>
    )
    if (message !== ''){
        return (
            <div>
                {show && <div className='message'> {message} </div>}
            </div>
        )

    }
}

export default Notification