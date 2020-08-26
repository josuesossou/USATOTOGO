import React from 'react';
import { StyledInput, Text } from '../assets/styles'
import { MEDIUM_TEXT } from '../assets/styles/fontSizes'
import UpArrow from '../assets/images/upArr.png'
import DownArrow from '../assets/images/dowArr.png'

export default ({ value, onChange }) => {
    return (
        <div className='flex w-32 h-full mr-10'>
            <StyledInput className='flex-1 flex justify-center items-center h-full '>
                <Text fontSize={MEDIUM_TEXT} className='font-bold text-gray-800'>
                    {value + 1}
                </Text>
            </StyledInput>
            <div className='flex flex-col w-8 bg-red-900 ml-2'>
                <div 
                    className={`bg-blue-700 flex-1 flex justify-center items-center hover:bg-blue-900 cursor-pointer
                    transition ease-in-out duration-500`}
                    onClick={() => onChange(1)}
                >
                    <img src={UpArrow} alt='up' className='relative w-1/3' />
                </div>
                <div 
                    className={`bg-blue-700 flex-1 flex justify-center items-center hover:bg-blue-900 cursor-pointer
                    transition ease-in-out duration-500`}
                    onClick={() => onChange(-1)}
                >
                    <img src={DownArrow} alt='up' className='relative w-1/3' />
                </div>
            </div>
        </div>
    )
}