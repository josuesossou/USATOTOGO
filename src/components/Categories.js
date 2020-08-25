import React from 'react';
import { Link } from 'react-router-dom'
import { CategoryStyle, Text, RedButton } from '../assets/styles'
import categoryData from '../assets/data/categoriesData'

export default () => {
    return (
        <div className="h-auto px-56 w-full flex flex-wrap">
            {categoryData.map((data, index) => <Category data={data} key={index} />)}
        </div>
    )
}

const Category = ({ data }) => {
    return (
        <CategoryStyle>
            <img src={data.img} className='w-full' alt={data.title} />
            <div className='w-full h-12 flex items-center justify-between px-2'>
                <Text fontSize={'1em'} className='font-bold text-gray-800'>{data.title}</Text>
                <Link to={`/create-order/${data.id}`}>
                    <RedButton className='h-auto'>Ordre</RedButton>
                </Link>
            </div>
        </CategoryStyle>
    )
}