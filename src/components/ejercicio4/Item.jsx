import React from 'react'
import styles from "../../styles.module.css"

const Item = ({item}) => {
    return (
        <p className={styles.itemList}>
            El articulo <span>{item}</span> se agregó a la lista
        </p>
    )
}

export default Item 