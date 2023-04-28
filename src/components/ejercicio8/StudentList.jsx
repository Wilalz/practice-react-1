import React, { useState } from 'react'
import styles from '../../styles.module.css'
import { Title } from '../Title'

export const StudentList = () => {
// 2. Definir los estados
    const [name, setName] = useState("");
    const [students, setStudents] = useState([]);

//5. Definir el manejador de eventos del boton
//      setName setea el name con un array vacio, así que limpia el input que está vinculado al name
//      setStudents es un array, primero usa el "...spread operator" que crea una copia del array "students" con todo lo que tuviera dentro
//      luego le adiciona un nuevo objeto con key "name" y con value "name"
    const handlerOnClick = () => {
        if(name !== ""){
            setName("");
            setStudents([
            ...students, {name: name}
            ])
        }
    }

// 1. Definir la estructura del html
return (
    <div className={styles.container}>
            <Title>8. Student List</Title>
            <h3>Add a new student to the list</h3>
{/* 3. El input contine un onChange, con cada cambio "setea" o redefine el valor del estado "name" */}
            <input 
                type="text" 
                placeholder='Student'
                value={name}
                onChange={e => setName(e.target.value)}
                />
{/* 4. El boton tiene un manejador de evento handlerOnClick que se ejecuta con cada click */}
            <button
                onClick={handlerOnClick}
                >Add
            </button>
{/* 6. Se crea una lista que dentro ejecuta el metodo .map para recoorer todo el array "students" */}
{/*         Por cada iteracion (student) se imprime un "li" con el "name" de cada student */}
{/*         Tambien se asigna una key (index) para diferenciar cada "li" */}
            <>
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>{student.name}</li>
                    ))}
                </ul>
            </>

        </div>
    )
}

