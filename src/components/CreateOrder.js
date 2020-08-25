import React from 'react';
import styled from "styled-components"
import { useParams } from 'react-router-dom'
import { ImageContainer, Text } from '../assets/styles'
import data from '../assets/data/categoriesData'

export default () => {
    const { categoryId } = useParams()
    const category = data[categoryId - 1]
    const selectedList = []

    React.useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className='w-full h-auto pt-16'>
            <ImageContainer>
                <Text fontSize={'2.5em'} className='text-blue-100 ml-4 font-bold'>{category.title}</Text>
                <img src={category.img} alt={category.title} className='h-full' />
            </ImageContainer>

            <Text className='text-gray-800 my-6' fontSize={'1.3em'}>
                Choisissez les meilleures options qui décrivent le produit que vous voulez.
            </Text>

            <hr className='mb-5'/>

            <Option 
                options={['heelo', 'he', 'heelos', 'comeon', 'heelo', 'he', 'heelos', 'comeon', 'heelo', 'he', 'heelos', 'comeon']}
                selectedList={selectedList}
                optionIndex={1}
            />

            <button onClick={() => {
                console.log(selectedList)
            }}>
                Submit //TODO
            </button>
        </div>
    )
}

const Option = ({ options, selectedList, optionIndex }) => {
    const [selected, setActive] = React.useState(-1)
    const setSelected = (option, index) => {
        setActive(index)
        selectedList[optionIndex] = option
    }

    return (
        <div>
            <Text fontSize={'1.5em'} className='font-bold text-gray-800 py-4'>
                Choisissez La Brand (Title)
            </Text>
            <div className='w-full flex flex-wrap'>
                {options.map((option, index) => (
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

const OptionStyles = styled.div`
`

const RadioButton = ({ active }) => {
    return (
        <div className='w-5 h-5 rounded-full border border-3 border-blue-900 flex justify-center items-center mx-3'>
            {active ? (<div className='bg-blue-800 rounded-full w-2 h-2'></div>) : null}
        </div>
    )
}