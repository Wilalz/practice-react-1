import React, {useState} from 'react'
import {Title} from '../Title'
import styles from '../../styles.module.css'

export const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [day, setDay] = useState("");
    const [theme, setTheme] = useState("");

    const handlerSubmit = e => {
        e.preventDefault();

        console.log(`name: ${name}`)
        console.log(`day: ${day}`)
        console.log(`theme: ${theme}`)
        alert("El formulario se ha enviado")
    }

    return (
        <div className={styles.container}>
            <Title>9. Registration form</Title>
            <h3>Registro</h3>
            <form onSubmit={handlerSubmit}>
                <div className={styles.cardPpal}>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text"
                        id='name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <br />
                
                <div className={styles.cardPpal}>
                    <p >Elige tu tema favorito</p>
                    <label htmlFor='events'>Eventos</label>
                    <input 
                        type="radio" 
                        id='events'
                        name='theme'
                        value="events"
                        onChange={(e) => setTheme(e.target.value)}
                        defaultChecked
                    />
                    <br />
                    <label htmlFor='forms'>Formularios</label>
                    <input 
                        type="radio" 
                        id='forms'
                        name='theme'
                        value="forms"
                        onChange={(e) => setTheme(e.target.value)}
                        />
                    <br />
                    <label htmlFor='states'>Estados</label>
                    <input 
                        type="radio" 
                        id='states'
                        name='theme'
                        value="states"
                        onChange={(e) => setTheme(e.target.value)}
                        />
                </div>
                <br />

                <div className={styles.cardFlex}>
                    <p>Elije tu dia favorito</p>
                    <select 
                        name="day"
                        onChange={(e) => setDay(e.target.value)}
                        defaultValue=""
                        >
                            <option value="monday">Lunes</option>
                            <option value="Tuesday">Martes</option>
                            <option value="Wednesday">Miercoles</option>
                            <option value="Thursday">Jueves</option>
                            <option value="Friday">Viernes</option>
                    </select>
                </div>
                
                <input type="submit" />

            </form>
        </div>
    )
}
