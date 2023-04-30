import React from 'react'
import styles from '../../../styles.module.css'

export const Card = ({data}) => {
    return (
        <div className={styles.cardDatos}>
            <h3>Datos enviados: </h3>
                <span><strong>Nombre: </strong>{data.name}</span>
                <span><strong>Apellido: </strong>{data.lastname}</span>
        </div>
    )
}
