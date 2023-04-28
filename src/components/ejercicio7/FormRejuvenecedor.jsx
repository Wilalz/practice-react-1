import React , {useEffect, useState} from 'react'
import { Title } from '../Title'
import styles from '../../styles.module.css'
import { InputFormName } from './InputFormName'
import { InputFormYear } from './inputFormYear'


export const FormRejuvenecedor = () => {

// me traje los estados del "inputFormName" y el "inputFormYear" 
//      para manejar la logica del formulario desde acá (el padre)

    const [valueText, setValueText ] = useState("");
    const [validText, setValidText] = useState(false);
    const [valueYear, setValueYear] = useState("");
    const [validYear, setValidYear] = useState(false);
    const [validForm, setValidFomr] = useState(false);
    const [newAge, setNewAge] = useState(0);


    const onSubmitForm = (e) => {
        e.preventDefault();  

        if(validForm === true){
            alert(`Hey ${valueText}, now you are only ${newAge} years old`)
        }else {
            alert(`Please check the fields in the form`)

        }
    }

    useEffect(()=>{
        const year = parseInt(valueYear);
        setNewAge (2023-(year + 10));
        setValidFomr((validText === true && validYear===true) ? true : false)
    }),[valueYear]






    
// le paso los estados al hijo como props

// 1. Establecer la estructura del formulario
    return (
        
        <div className={styles.container}>
            <Title>7. Rejuvenecedor</Title>
            <h3>Rejuvenate 10 years</h3>
            <form onSubmit={onSubmitForm}>
                <InputFormName 
                    minlength="1"
                    maxlength="10"
                    msg="Text only, 1 to 10 characters"
                    valueText={valueText}
                    setValueText={setValueText}
                    validText={validText}
                    setValidText={setValidText}
                    
                    />
                <InputFormYear 
                    min="1900"
                    max="2013"
                    msg="Numbers only between 1900 and 2013"
                    valueYear={valueYear}
                    setValueYear={setValueYear}
                    validYear={validYear}
                    setValidYear={setValidYear}
                />
                
                <button 
                    type='submit'
                    className={styles.buttonBlue}
                    >
                    Start
                </button>

            </form>

        </div>
    )
}

