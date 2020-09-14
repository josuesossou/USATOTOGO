import React from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createCategory, createOption, createProduct } from '../graphql/mutations'
import { listCategorys } from '../graphql/queries'
import { Loader } from '../assets/styles'

// Amplify.configure(awsExports);

export default () => {

    const [categories, setCategories] = React.useState([])

    React.useState(() => {
        fetchCategories()
    }, [])
    
    async function fetchCategories() {
        try {
          const categoriesData = await API.graphql(graphqlOperation(listCategorys))
          const categroies = categoriesData.data.listCategorys.items
          setCategories(categroies)
        } catch (err) { console.log('error fetching categories', err) }
    }

    async function addCategory() {
        try {
            const category = { 
                img: 'https://ae01.alicdn.com/kf/HTB1upScob5YBuNjSspoq6zeNFXa2.jpg',
                title: 'Les Jeux Video'
            }

            const product = {
                img: 'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                title: 'PS2 - FAT',
                maxPrice: 1000,
                minPrice: 2000,
                shippingPrice: 100,
                categoryTitle: 'Les Jeux Video'
            }

            const option = {
                options: ['2 manette', '1 manetter', 'sans manette'],
                productTitle: 'PS2 - FAT',
                title: 'Combein De Bra Vous Vouler'
            }

            await API.graphql(graphqlOperation(createCategory, { input: category }))
            await API.graphql(graphqlOperation(createProduct, { input: product }))
            await API.graphql(graphqlOperation(createOption, { input: option }))
        } catch (err) {
            console.log('error creating categoru:', err)
        }
    }

    return (
        <div className='h-64 bg-blue-900 w-full'>
            {/* <Loader /> */}
            <div onClick={() => addCategory()}>
                click me
            </div>

            {categories.map((category) => (
                <p key={category.id} style={{ color: 'yellow'}}>
                    {category.title} {category.img}
                </p>
            ))}
        </div>
    )
}