// boton tipo swiche, permite intercambian entre 2 estados en este caso, encendido y apagado


import styles from "../../styles.module.css"
// 4. importar el hook useState
import { useState } from 'react'

// 1. crear componente    
export const CardCoche = ({type}) => {
// 5. crear el estado useState
    const [stateCar, setStateCar] = useState(false);  // por default lo establecemos en false

// 3. crear la funcion que ejecutará el boton con el click
// 7. usar la funcion setStateCar en la funcion del boton. El estado se actualiza y react cambia automaticamente el DOM
//      (esta funcion le envia el valor contario al que tiene el estado, se hace con la negacion !)
    const encenderApagar = () => {
        setStateCar(!stateCar)

    }


// 2. Crear un boton que tenga una funcion cuando se da click
// 6. usar el state en el componente para que sea renderizado. 
//      (como es booleano no se imprime en el componente, así que usamos una comprobacion)
    return(
        <div className={styles.cardCoche}>
            <p className={styles.carState}>Este coche 
                <span>{type}</span> 
                está:&nbsp;
                <span className={styles.state}>{stateCar ? "Encendido" : "Apagado"}</span>
            </p>
            <button onClick={encenderApagar}>Encender / Apagar</button>
        </div>
    )

}