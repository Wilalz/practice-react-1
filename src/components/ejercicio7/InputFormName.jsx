import React, { useState } from 'react'
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


export const InputFormName = ({minlength=1, maxlength=20, msg }) => {
// 2. Crear estados para el campo
    const [valueText, setValueText ] = useState("");
    const [validText, setValidText] = useState(false);

// 3. Crear un manejador del evento, que ejecuta las funciones al suceder el evento
// 7. Usar las validaciones dentro del manejador del evento
    const onChangeText = (e) => {
        const withoutSpaces = e.target.value.trim();
        setValueText (withoutSpaces);
        validateText(withoutSpaces);
    }

// 6. Crear las validaciones del campo
    const validateText = (text) => {
        const textAsArray = text.split("")
        // console.log(`textAsArray: ${textAsArray}`)

        const hasNumber = textAsArray.some((char) => {
            if (!isNaN(char)){
                return true;
            }
        })
        
        const isValidLength = () => {
            if (text.length >= minlength && text.length <= maxlength){
                return true;
            }
        }
        
        if (hasNumber === false && isValidLength() === true ){
            setValidText(true);
        }else {
            setValidText(false);
        }
    }

// 1. Crear estructura del campo en el formulario
// 5. el imput usa el manejador del evento
    return (
        <>
            <input
                type='text'
                placeholder='Short name'
                value={valueText}
                onChange={onChangeText}
                >    
            </input>
            {validText ? "" : <span className={styles.error_msg}>{msg}</span>}
            {validText ? "" : <span className={styles.error_msg}>There is an error in this field</span>}        
        </>
    )
}

// 4. Manejador para el formulario en el padre