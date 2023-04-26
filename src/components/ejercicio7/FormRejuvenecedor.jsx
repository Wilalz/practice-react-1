import React from 'react'
import { Title } from '../Title'
import styles from '../../styles.module.css'
import { ImputFormName } from './ImputFormName'

export const FormRejuvenecedor = () => {
    const onSubmitForm = (e) => {
        e.preventDefault();

        // validar que no hayan errores y envia el formulario


    }


    return (
        
        <div className={styles.container}>
            <Title>7. Rejuvenecedor</Title>
            <h3>Rejuvenates 10 years</h3>
            <form onSubmit={onSubmitForm}>
                <ImputFormName 
                    minlength="1"
                    maxlength="10"
                    msg="Text only, 1 to 10 characters"
                    />
                <div>
                    <input
                        placeholder="Year of birth"
                        />
                    <p>Numbers only between 1900 and 2013</p>
                </div>
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

