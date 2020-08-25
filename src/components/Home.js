import React from 'react';
import { BlueGradient, GreenGradient, Text, RedButton } from '../assets/styles'

export default () => {
    const [change, setChange] = React.useState(true)

    setTimeout(() => {
        setChange(!change)
    }, 8000)

    return (
        <div className={`h-screen w-full`}>
            {change ? <BlueGradient/> : <GreenGradient />}
            <div className='p-32 h-full flex'>
                <div className='flex-1'>
                    <Text fontSize={'3.5em'} width={'100%'} className='px-8 text-blue-900 font-bold'>
                        Envoyez Vos Commandes!
                    </Text>
                    <Text fontSize={'2.5em'} width={'50%'} className='px-8 py-4 text-blue-900'>
                        On Annoncera La Date de Livraison bientôt
                    </Text>
                    <RedButton className='mx-8 shadow-md mt-56'>
                        Statut De Livraison
                    </RedButton>
                </div>
                <div className='flex-2 bg-yellow-400'>
                </div>
            </div>
            
        </div>
    )
}