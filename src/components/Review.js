import React from 'react'
import { OverlayClickBg, Text, RedButton, Overlay} from '../assets/styles'
import { SMALL_TEXT, MEDIUM_TEXT, EX_LARGE_TEXT } from '../assets/styles/fontSizes'

export default ({ reviewData, closeOverlay }) => {
    return (
        <Overlay>
            <OverlayClickBg onClick={closeOverlay} />
            <section>
                <Text fontSize={MEDIUM_TEXT} className='underline font-bold'>
                    Réviser Votre Commande
                </Text>
                {
                    reviewData.selectedList.map((selected, index) => (
                        <div key={index}>
                            <Text className='font-bold'>{selected.title}: </Text>
                            <Text>{selected.option}</Text>
                        </div>
                    ))
                }
                <div>
                    <Text className='font-bold'>Quantité: </Text>
                    <Text>{reviewData.quantity}</Text>  
                </div> 

                <div>
                    <Text className='font-bold'>Le Prix Dui Produit: </Text>
                    <Text>{reviewData.myPrice} CFA</Text>
                </div>

                <div>
                    <Text className='font-bold'>Le Prix De Livraison: </Text>
                    <Text>{reviewData.deliveryPrice} CFA</Text>
                </div>

                <div>
                    <Text className='font-bold'>Prix ​​Total à Payer: </Text>
                    <Text>{reviewData.myPrice + reviewData.deliveryPrice} CFA</Text>
                </div>

                <RedButton>
                    Complete Le Commande
                </RedButton>
            </section>
        </Overlay>
    )
}

// selectedList: this.state.selectedList,
//                     quantity: this.state.quantity,
//                     myPrice: this.state.myPrice,
//                     deliveryPrice: this.state.del