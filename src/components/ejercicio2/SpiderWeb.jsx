import { useEffect } from 'react'
import { ElephantEmoji } from './elephantEmoji'
import styles from "../../styles.module.css"

export const SpiderWeb = ({quantity}) => {
    return (
        <>
        <ElephantEmoji />
        <p className={styles.toDo}>*** Acá quiero renderizar un elefante cada que agrego uno, pero todavia no funciona :(   ***</p>
        </>
    )
}
