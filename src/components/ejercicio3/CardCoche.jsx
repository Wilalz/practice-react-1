// boton tipo swiche, permite intercambian entre 2 estados en este caso, encendido y apagado

import styles from "../../styles.module.css"
// 2. importar el hook useState
import { useState } from 'react'

// 1. crear componente    
export const CardCoche = ({type}) => {
// 3. crear el estado useState
    const [stateCar, setStateCar] = useState(false);  // por default lo establecemos en false

// 5. crear la funcion que ejecutará el boton, que a su vez utiliza la funcion "setStateCar" del useState
//      Al dar clic, se setea el estado "stateCar", y al actualizarse React cambia automaticamente el DOM
//      (esta funcion le envia el valor contario al que tiene el estado, se hace con la negacion !)
    const encenderApagar = () => {
        setStateCar(!stateCar)

    }


// 6. usar el state en el componente para que sea renderizado. 
//      (como es booleano no se imprime en el componente, así que usamos una comprobacion ternario)
    return(
        <div className={styles.cardCoche}>
            
            <p className={styles.carState}>Este coche 
                <span>{type}</span> 
                está:&nbsp;
                <span className={stateCar === false ? styles.state: styles.stateEncendido}>
                    {stateCar ? "Encendido" : "Apagado"}</span>
            </p>

{/* 4. Crear un boton que tenga una funcion  cuando se da click 'onClick' */}
            <button onClick={encenderApagar}>Encender / Apagar</button>

        </div>
    )

}