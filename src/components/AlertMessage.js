import React from 'react'
import { Text, Button, } from '../assets/styles'
import { SMALL_TEXT, MEDIUM_TEXT, EX_LARGE_TEXT } from '../assets/styles/fontSizes'
import CloseIcon from '../assets/images/close@2x.png'

/**
 * @param {string} message the message to display
 */
export default ({ message }) => {
    const color = 'black'
    const [show, changeShow] =  React.useState(true)
    const [close, changeClose] = React.useState('alert-message-show')

    setTimeout(() => {
        changeClose('alert-message-hide')
    } , 5000)

    setTimeout(() => {
        changeShow(false)
    } , 5500)

    const closeCallback = () => {
        changeClose('alert-message-hide')
        clearTimeout()

        setTimeout(() => changeShow(false), 500)
    }

    return (
        show ? (
            <div className={`fixed z-40 ${close}`} style={{ top: '6rem', left: '50%' }}>
                <Text text={message} color={color}>
                    {message}
                </Text>
                <Button onClick={closeCallback} className='absolute top-0 right-0'>
                    <img src={CloseIcon} alt='Close' />
                </Button>
            </div>
        ) : null
    )
}