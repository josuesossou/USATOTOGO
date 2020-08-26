import React from 'react';
import Slider from './Slider'
import NumberInput from './NumberInput'
import AlertMessage from './AlertMessage'
import { useParams } from 'react-router-dom'
import { ImageContainer, Text, RedButton, } from '../assets/styles'
import { SMALL_TEXT, MEDIUM_TEXT, EX_LARGE_TEXT } from '../assets/styles/fontSizes'
import { 
    CHOOSE_PRICE_DESCRIPTION, 
    CATEGORY_DESCRIPTION, 
    CHOOSE_PRICE_TITLE, 
    QUANTITY_TITLE,
    SHIPPING_PRICE_TITLE,
    ERROR_MESSAGE
} from '../assets/styles/textStrings'
import data from '../assets/data/categoriesData'

export default () => {
    const { categoryId } = useParams()
    const category = data[categoryId - 1]
    const selectedList = []
    const [myPrice, setMyPrice] = React.useState(category.minPrice + (category.maxPrice - category.minPrice)/2)
    const [quantity, setQuantity] = React.useState(0)
    const [scrollTop, setScrollTop] = React.useState(false)
    const [deliveryPrice, setDeliveryPrice] = React.useState(category.shippingPrice)
    const [alert, showAlert] = React.useState(false)
    const [review, showReview] = React.useState(false)

    React.useEffect(() => {
        if (!scrollTop) {
            window.scrollTo(0, 0)
            setScrollTop(true)
        }
    })

    const submitOrder = () => {
        if (selectedList.includes(undefined) || selectedList.length === 0) {
            showAlert(true)
            return;
        }

        const finalData = {
            selectedList,
            quantity,
            myPrice,
            deliveryPrice
        }

        showReview(true);
    }

    return (
        <div className='w-full h-auto pt-16'>
            <AlertMessage message={ERROR_MESSAGE} show={alert} closeCallback={() => showAlert(false)} />

            <ImageContainer>
                <Text fontSize={EX_LARGE_TEXT} className='text-blue-100 ml-4 font-bold'>{category.title}</Text>
                <img src={category.img} alt={category.title} className='h-full' />
            </ImageContainer>

            <Text className='text-gray-800 mb-8 mt-5' fontSize={SMALL_TEXT}>
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
                    {CHOOSE_PRICE_TITLE}
                </Text>

                <div className='mx-4'>
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
            </div>
            
            <div className='my-8'>
                <Text fontSize={MEDIUM_TEXT} className='font-bold text-gray-800 py-4'>
                    {QUANTITY_TITLE}
                </Text>

                <div className='mx-4 flex items-center'>
                    <NumberInput 
                        value={quantity}
                        onChange={(direction) => {
                            if (quantity > 0 || (direction === 1)) {
                                setQuantity(quantity + direction)
                                setDeliveryPrice(category.shippingPrice + (category.shippingPrice/2) * (quantity + direction))
                            }
                        }}
                    />

                    <Text fontSize={SMALL_TEXT} className='font-bold'>
                        {SHIPPING_PRICE_TITLE}: {deliveryPrice} CFA
                    </Text>
                </div>
            </div>

            <RedButton 
                className='my-8'
                onClick={submitOrder}
            >
                Soumettre La Commande 
            </RedButton>

        </div>
    )
}

const Option = ({ optionData, selectedList, optionIndex }) => {
    const [selected, setActive] = React.useState(-1)
    const setSelected = (option, index) => {
        setActive(index)
        selectedList[optionIndex] = { option, title: optionData.title }
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
        <div className='w-5 h-5 rounded-full border border-3 border-blue-900 flex justify-center items-center mr-3'>
            {active ? (<div className='bg-blue-800 rounded-full w-2 h-2'></div>) : null}
        </div>
    )
}

