import React from 'react'
import { ElephantEmoji } from './elephantEmoji'

export const SpiderWeb = ({quantity}) => {

    const q = {quantity};


    function generateElement (q){
        for(let i=0; i<=q; i++){
            return (
                <div>
                <ElephantEmoji />
                <p>Acá quiero renderizar un elefante cada que agrego uno, pero todavia no funciona</p>


            </div>
                )
        }
    }

    return (
        generateElement(q.quantity)
    )
}
