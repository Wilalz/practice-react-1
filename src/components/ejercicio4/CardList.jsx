import { Title } from '../Title'
import { useState } from 'react'
import Item from './Item';
import { ButtonAdd } from '../ejercicio2/ButtonAdd';
import styles from "../../styles.module.css"

export const CardList = () => {
    const [quantity , setQuantity] = useState(0);



    const handlerOnClick = () => {
        setItem(quantity+1)
    }



    return (
        <div className={styles.cardPpal}>
            <Title>4. Add to a list</Title>

            <ButtonAdd className={styles.btnCount} 
                quantity={quantity} setQuantity={setQuantity}
                >Agregar
            </ButtonAdd>

            <p className={styles.toDo}>*** Acá quiero renderizar una nueva tarjeta cada vez que doy click en agregar, pero todavia no funciona :( ***</p>

            <div>
                <Item item={quantity} />
            </div>


        </div>
    )
}
