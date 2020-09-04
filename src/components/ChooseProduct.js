import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Text, } from '../assets/styles'
import { MEDIUM_TEXT, SMALL_TEXT } from '../assets/styles/fontSizes'
import { 
    CHOOSE_PRICE_DESCRIPTION, 
    CATEGORY_DESCRIPTION, 
    CHOOSE_PRICE_TITLE, 
    QUANTITY_TITLE,
    SHIPPING_PRICE_TITLE,
    ERROR_MESSAGE
} from '../assets/styles/textStrings'
import ImageHeader from './ImageHeader'
import data from '../assets/data/categoriesData'


export default () => {
    let { categoryId } = useParams()
    const productData = data[0]

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='w-full h-auto pt-16'>
            <ImageHeader img={productData.img} title={productData.title} />
            <Text className='text-gray-800 mb-8 mt-5 font-bold' fontSize={SMALL_TEXT}>
                {CATEGORY_DESCRIPTION} {categoryId}
            </Text>
            {
                productData.product.map((product, index) => <Products product={product} id={index} />)
            }
        </div>
    )
}
// /create-order/:productName/:productId

const Products = ({ product, id }) => {
    return (
        <Link to={`/create-order/${product.title}/${id}`}>
            <div className={`w-full h-auto p-3 flex justify-between text-black items-center
                border-b-2  hover:bg-blue-700 hover:text-blue-100 cursor-pointer 
                transition duration-500 ease-in-out`}>
                <Text fontSize={MEDIUM_TEXT} className='font-bold'>
                    {product.title}
                </Text>
                <Text>
                    Gamme de Prix: {product.minPrice} - {product.maxPrice}
                </Text>
                <img src={product.img} alt={product.title} />
            </div>
        </Link>
    )
}