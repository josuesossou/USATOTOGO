import React from 'react';
import { useParams } from 'react-router-dom'
import { ImageContainer, Text, RedButton } from '../assets/styles'
import { SMALL_TEXT, MEDIUM_TEXT, EX_LARGE_TEXT } from '../assets/styles/fontSizes'
import { CHOOSE_PRICE_DESCRIPTION, CATEGORY_DESCRIPTION } from '../assets/styles/textStrings'
import data from '../assets/data/categoriesData'
import Slider from './Slider.js'



export default () => {
    const { categoryId } = useParams()
    const category = data[categoryId - 1]
    const selectedList = []

    React.useEffect(() => {
        if (myPrice === 0)
            window.scrollTo(0, 0)
    })

    const [myPrice, setMyPrice] = React.useState(category.minPrice + (category.maxPrice - category.minPrice)/2)

    return (
        <div className='w-full h-auto pt-16'>
            <ImageContainer>
                <Text fontSize={EX_LARGE_TEXT} className='text-blue-100 ml-4 font-bold'>{category.title}</Text>
                <img src={category.img} alt={category.title} className='h-full' />
            </ImageContainer>

            <Text className='text-gray-800 mb-16 mt-5' fontSize={SMALL_TEXT}>
                {CATEGORY_DESCRIPTION}
            </Text>

            {
                category.optionsList.map((options, index) => <Option 
                    key={index}
                    optionData={options}
                    selectedList={selectedList}
                    optionIndex={index}
                />)
            }

            <div className='my-8'>
                <Text fontSize={MEDIUM_TEXT} className='font-bold text-gray-800 py-4'>
                    Choose The Price You Want To Pay
                </Text>
                <Slider 
                    onChange={(val) => (setMyPrice(val))} 
                    min={category.minPrice}
                    max={category.maxPrice}
                />
                <div className='flex justify-between my-3'>
                    <Text className='text-gray-800' fontSize={SMALL_TEXT}>
                        Minimum Prix: {category.minPrice} CFA
                    </Text>
                    <Text className='text-gray-800' fontSize={SMALL_TEXT}>
                        Votre Prix: {myPrice} CFA
                    </Text>
                    <Text className='text-gray-800' fontSize={SMALL_TEXT}>
                        Maximum Prix: {category.maxPrice} CFA
                    </Text>
                </div>

                <Text fontSize={SMALL_TEXT} className='text-gray-800'>
                    {CHOOSE_PRICE_DESCRIPTION}
                </Text>
            </div>

            <RedButton 
                className='my-8'
                onClick={() => {
                    console.log(selectedList)
                }}
            >
                Submit //TODO
            </RedButton>

        </div>
    )
}

const Option = ({ optionData, selectedList, optionIndex }) => {
    const [selected, setActive] = React.useState(-1)
    const setSelected = (option, index) => {
        setActive(index)
        selectedList[optionIndex] = option
    }

    return (
        <div>
            <Text fontSize={MEDIUM_TEXT} className='font-bold text-gray-800 py-4'>
                {optionData.title}
            </Text>
            <div className='w-full flex flex-wrap'>
                {optionData.options.map((option, index) => (
                    <div 
                        key={index} 
                        className='flex items-center mb-6 mx-4' 
                        onClick={() => setSelected(option, index)}
                    >
                        <RadioButton active={selected === index} />
                        {option}
                    </div>
                ))}
            </div>

            <hr className='my-5'/>
        </div>
    )
}

const RadioButton = ({ active }) => {
    return (
        <div className='w-5 h-5 rounded-full border border-3 border-blue-900 flex justify-center items-center mx-3'>
            {active ? (<div className='bg-blue-800 rounded-full w-2 h-2'></div>) : null}
        </div>
    )
}