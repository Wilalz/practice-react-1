import { useEffect, useState } from 'react'
import styles from '../../styles.module.css'

/**--------- FORMAS DE VALIDAR LA INFORMACION -------------
A) A medida que la persona va ingresando los datos. // en este caso se controla y ejecuta una accion de validar a medida que trascurre la interaccion del usuario
B) Cuando abandona un campo específico (blur).  // se controla y se ejecuta la accion de validar cuando el usuario sale del input o campo
C) Al momento en que se envía el formulario. // se controla y se ejecuta la accion de validar cuando el usuario da click en el boton del formulario, por ejemplo enviar
*/ 

/** para este ejemplo vamos a usar la opcion A medida que la persona va ingresando los datos. */
/** La idea seria que si alguno de los campos no cumple la validacion, 
 *      se muestra un mensaje de error 
 *      y "no enviamos los datos al servidor" */


export const InputFormYear = ({msg, min, max, valueYear, setValueYear, validYear, setValidYear}) => {

// 2. Crear estados para el campo
// 8. Me llevé los estados para el padre

    
    
    // 6. Crear las validaciones del campo
    const year = parseInt(valueYear);
    // const validateYear = (year >= min && year <= max) ? true : false

// 3. Crear un manejador del evento, que ejecuta las funciones al suceder el evento
// 7. Usar las validaciones dentro del manejador del evento
    const onChangeYear = (e) => {
        setValueYear(e.target.value);
        // setValidYear(validateYear);
        
    }

    useEffect (()=>{
        setValidYear((year >= min && year <= max) ? true : false);
    }), [valueYear]

// 1. Crear estructura del campo en el formulario
// 5. el imput usa el manejador del evento
    return (
        <>
            <input
                type="number"
                placeholder="Year of birth"
                value={valueYear}
                onChange={onChangeYear}
                min={min}
                max={max}
                >
            </input>
            {validYear ? "" : <span className={styles.error_msg}>{msg}</span>}
            {validYear ? "" : <span className={styles.error_msg}>There is an error in this field</span>}
        </>
        
    )
}

// 4. Manejador para el formulario en el padre