import React from 'react'

export const InputApellidoTeacher = ({lastname, handlerChange}) => {


// el metodo handler, llama al metodo "handlerChange" que viene desde el padre como props
// que en el padre hace referencia al "handlerChange" que setea los estados

    const handler = (e) => {
        handlerChange(e, "lastname")
    }



// el input tiene su propio onChange que llama al metodo handler
    return (
        <>
            <label htmlFor="lastname"> --- input desde un componente --- </label>
            <input
                id='lastname'
                name='lastname'
                onChange={handler}
                placeholder='Ingresa el apellido'
                value={lastname}
                >
            </input>
            
        </>
    )
}
