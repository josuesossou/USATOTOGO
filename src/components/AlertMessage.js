import React from 'react'
import { Text, Button, } from '../assets/styles'
import { SMALL_TEXT, MEDIUM_TEXT, EX_SMALL_TEXT } from '../assets/styles/fontSizes'
import CloseIcon from '../assets/images/close@2x.png'
import '../assets/css/animation.css'

/**
 * @param {string} message the message to display
 * @param {boolean} show the message to display
 * @param {function} closeCallback the message to display
 */
export default ({ message, show, closeCallback }) => {
    const color = 'black'
    const [fade, changeFade] = React.useState('fade-in-mycl')

    const close = () => {
        changeFade('fade-out-mycl')
        setTimeout(() => {
            closeCallback()
            changeFade('fade-in-mycl')
        }, 500)
    }

    return (
        show ? (
            <div onClick={close}
                className={`fixed z-40 ${fade} w-1/3 bg-red-200 shadow-lg cursor-pointer p-3`} 
                style={{ top: '6rem', left: '50%', transform: 'translateX(-50%)'}}
            >
                <Text fontSize={SMALL_TEXT} className='text-red-800 text-center'>
                    {message}
                </Text>
                <Text fontSize={EX_SMALL_TEXT} className='text-red-800 absolute right-0 bottom-0'>
                    Taper Pour Fermer
                </Text>
            </div>
        ) : null
    )
}