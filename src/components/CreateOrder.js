import React from 'react';
import Slider from './Slider'
import NumberInput from './NumberInput'
import AlertMessage from './AlertMessage'
import Review from './Review'
import { withRouter } from 'react-router-dom'
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

class CeateOrder extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            category: null,
            selectedList: [],
            myPrice: 0,
            quantity: 0,
            deliveryPrice: 0,
            alert: false,
            review: { show: false, reviewData: null }
        }
    }

    componentDidMount() {
        const { categoryId } = this.props.match.params
        const category = data[categoryId - 1]

        this.setState({
            category,
            myPrice: category.minPrice + ((category.maxPrice - category.minPrice) / 2),
            deliveryPrice: data[categoryId - 1].shippingPrice
        })
        window.scrollTo(0, 0)
    }
    
    submitOrder = () => {
        if (this.state.selectedList.includes(undefined) || this.state.selectedList.length === 0) {
            this.setState({ alert: true })
            return;
        }
        // showAlert(false)
        this.setState({
            review: {
                show: true,
                reviewData: {
                    selectedList: this.state.selectedList,
                    quantity: this.state.quantity + 1,
                    myPrice: this.state.myPrice,
                    deliveryPrice: this.state.deliveryPrice
                }
            }
        })

        console.log(this.state.review)
    }

    closeReview = () => {
        this.setState((prev) => ({
            review: {
                show: false,
                reviewData:  prev.review.reviewData
            }
        }))
    }

    render() {
        return this.state.category ? (
            <div className='w-full h-auto pt-16'>
                <AlertMessage message={ERROR_MESSAGE} show={this.state.alert} closeCallback={() => this.setState({ alert: false })} />
                {this.state.review.show ? <Review reviewData={this.state.review.reviewData} closeOverlay={this.closeReview} /> : null}

                <ImageContainer>
                    <Text fontSize={EX_LARGE_TEXT} className='text-blue-100 ml-4 font-bold'>{this.state.category.title}</Text>
                    <img src={this.state.category.img} alt={this.state.category.title} className='h-full' />
                </ImageContainer>

                <Text className='text-gray-800 mb-8 mt-5' fontSize={SMALL_TEXT}>
                    {CATEGORY_DESCRIPTION}
                </Text>

                {
                    this.state.category.optionsList.map((options, index) => <Option 
                        updateList={(selectedList) => this.setState({ selectedList })}
                        key={index}
                        optionData={options}
                        selectedList={this.state.selectedList}
                        optionIndex={index}
                    />)
                }
                
                <div className='my-8'>
                    <Text fontSize={MEDIUM_TEXT} className='font-bold text-gray-800 py-4'>
                        {CHOOSE_PRICE_TITLE}
                    </Text>

                    <div className='mx-4'>
                        <Slider 
                            change={(val) => {
                                this.setState(() => ({ myPrice: val }))
                                // console.log(val)
                                console.log('STATE PRICE', this.state.myPrice)
                            }}
                            min={this.state.category.minPrice}
                            max={this.state.category.maxPrice}
                        />
                         
                        <div className='flex justify-between my-3'>
                            <Text className='text-gray-800' fontSize={SMALL_TEXT}>
                                Minimum Prix: {this.state.category.minPrice} CFA
                            </Text>
                            <Text className='text-gray-800' fontSize={SMALL_TEXT}>
                                Votre Prix: { this.state.myPrice } CFA
                            </Text>
                            <Text className='text-gray-800' fontSize={SMALL_TEXT}>
                                Maximum Prix: {this.state.category.maxPrice} CFA
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
                            value={this.state.quantity}
                            onChange={(direction) => {
                                if (this.state.quantity > 0 || (direction === 1)) {
                                    this.setState((prev) => ({
                                        quantity: prev.quantity + direction,
                                        deliveryPrice: prev.category.shippingPrice + 
                                        (prev.category.shippingPrice/2) * (prev.quantity + direction)
                                    }))
                                    // setQuantity(quantity + direction)
                                    // setDeliveryPrice(category.shippingPrice + 
                                    //     (category.shippingPrice/2) * (quantity + direction))
                                }
                            }}
                        />

                        <Text fontSize={SMALL_TEXT} className='font-bold'>
                            {SHIPPING_PRICE_TITLE}: {this.state.deliveryPrice} CFA
                        </Text>
                    </div>
                </div>

                <RedButton 
                    className='my-8'
                    onClick={this.submitOrder}
                >
                    Soumettre La Commande 
                </RedButton>

            </div>
        ) : null
    }
}

export default withRouter(CeateOrder);

const Option = ({ optionData, selectedList, optionIndex, updateList }) => {
    const [selected, setActive] = React.useState(-1)
    const setSelected = (option, index) => {
        setActive(index)
        selectedList[optionIndex] = { option, title: optionData.title }
        updateList(selectedList)
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
                        className='flex items-center mb-6 mx-4 cursor-pointer' 
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

