import React from 'react';
import CreateOrder from '../components/CreateOrder';
import ChooseProduct from '../components/ChooseProduct';

export const CreateOrderPage = () => {
    return (
        <div className='w-full min-h-screen px-64'>
           <CreateOrder />
        </div>
    )
}

export const ChooseProductPage = () => {
    return (
        <div className='w-full min-h-screen px-64'>
           <ChooseProduct />
        </div>
    )
}