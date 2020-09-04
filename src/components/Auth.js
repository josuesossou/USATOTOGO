import React from 'react'
import { Auth } from 'aws-amplify';
import { Text, RedButton } from '../assets/styles'

export default () => {
    return (
        <div className='h-screen p-16 flex flex-col justify-center items-center'> 
            <Text fontSize={'2em'} className='m-6'>
                Vous devez vous connecter pour placer des commandes
            </Text>
            <RedButton onClick={() => Auth.federatedSignIn()}>
                Connecter
            </RedButton>
        </div>
    )
}
