import React , {useState} from 'react'
import { Title } from '../Title'
import styles from '../../styles.module.css'
import { InputFormName } from './InputFormName'
import { InputFormYear } from './inputFormYear'


export const FormRejuvenecedor = () => {
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(validYear === true){
            console.log(true)
        }
        // validar que no hayan errores EN LOS 2 INPUTs y envia el formulario


    }


    return (
        
        <div className={styles.container}>
            <Title>7. Rejuvenecedor</Title>
            <h3>Rejuvenates 10 years</h3>
            <form onSubmit={onSubmitForm}>
                <InputFormName 
                    minlength="1"
                    maxlength="10"
                    msg="Text only, 1 to 10 characters"
                />
                <InputFormYear 
                    min="1900"
                    max="2013"
                    msg="Numbers only between 1900 and 2013"
                />

                <button 
                    className={styles.imgStart}>
                    Start
                </button>
                <h3>Now you are only &#32;
                    <span>XX</span> 
                    &#32; years old
                </h3>

            </form>

        </div>
    )
}

