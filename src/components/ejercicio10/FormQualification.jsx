import React, { useState } from 'react'
import styles from "../../styles.module.css"

export const FormQualification = () => {

    function handleSubmit(event) {
        event.preventDefault();
    }


//** Tener en cuenta que la opcion "Seleccione una disciplina" no puede seleccionarse */

    return (
        <div className={styles.container}>
            <h1>10. Notas de Alumnos</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.container_input}>
                    <select className={styles.select}>
                        <option 
                            
                            value=""
                        >Seleccione una disciplina
                        </option>
                        <option value="database">Base de Datos</option>
                        <option value="backend">Desarrollo Backend</option>
                        <option value="frontend">Desarrollo Frontend</option>
                    </select>
                    <input 
                        id='input_nota'
                        placeholder='Nota'/>
                    <button type="submit" value="Guardar" >Guardar</button>
                </div>
            </form>

            <div className={styles.container}>
                <table border="1" className={styles.line_title}>
                <thead>
                    <tr>
                    <th>Disciplina</th>
                    <th>Cantidad de alumnos</th>
                    <th>Nota media</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Base de Datos</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>

                    <tr>
                    <td>Desarrollo Backend</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>

                    <tr>
                    <td>Desarrollo Frontend</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <p className={styles.toDo}>*** Solo está la estructura del formulario y la tabla, falta toda la logica :( ***</p>
        </div>
    )
}
