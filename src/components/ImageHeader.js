import React from 'react'
import { ImageHeaderStyle, Text, } from '../assets/styles'
import { EX_LARGE_TEXT } from '../assets/styles/fontSizes'

export default ({ img, title }) => {
    return (
        <ImageHeaderStyle>
            <Text fontSize={EX_LARGE_TEXT} className='text-white ml-4 font-bold' >{title}</Text>
            {img ? <img src={img} alt={title} className='h-full' /> : null}
        </ImageHeaderStyle>
    )
}