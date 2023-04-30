import { useState } from 'react'
import {Title} from '../../Title'   
import { InputApellidoTeacher } from '../input'
import styles from '../../../styles.module.css'
import { Card } from '../card/index'

export const FormTeacher = () => {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [data, setData] = useState({});
    
// este manejador solo setea la informacion en el estado
// En este ejemplo implementé el mismo manejador para setear 2 estados diferentes :)
// OJO NO HACE VALIDACIONES -----------------------
// OJO, acá no se puede consologear el estado "name" o "apellido" porque aparecen como atrasados en el tiempo

    const handlerChange =(e, type)=> {
        if(type === "nombre"){
            setName(e.target.value)
            console.log("name: " , e.target.value);
        }else if(type === "lastname"){
            setLastname(e.target.value)
            console.log("lastname: " , e.target.value);
        }
        // ESTA VALIDACION NO DEBE IR ACÁ PORQUE BLOQUEA AL INPUT PARA RECIBIR INFO --------
        // if(e.target.value.length > 2){
            // setName(e.target.value)
        // }
    }

// otro manejador será el que haga las validaciones para enviar al servidor
// recordar que las validaciones de hacen a) al tiempo, b) al salir onBlur, c) al enviar
// necesario el event.preventDefault() para evitar que se envie y la pagina se recarge
//nuevamente llamamos al SetName y setLastname para que setee los estados, 
//      en este caso en un string vacio, lo que hará que se limpie la informacion de los inputs ya que están vinculados con el value de cada input

// validacion de los campos con Expresiones regulares
//      La expresión regular que usaremos es:   /^[A-Z]+$/i
//      Donde:
//          ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
//          [A-Z] indica que los caracteres admitidos son letras del alfabeto
//          + indica que los caracteres dentro de los corchetes se pueden repetir
//          $ indica que el patrón finaliza con los caracteres que están dentro de los corchetes.
//          i indica que validaremos letras mayúsculas y minúsculas (case-insensitive)

    const handlerSubmit = (e) => {
        e.preventDefault();

        const pattern = new RegExp('^[A-Z]+$', 'i');

        if(name === "" || lastname === ""){
            alert(`Debes diligenciar ambos campos`)
            setIsValid(false)
        } else {
            if(pattern.test(name) && pattern.test(lastname)){
                const data = {
                    name, 
                    lastname
                }
        
                setData(data)
                setName("");
                setLastname("");
                setIsValid(true)
                // alert(`Datos enviados: name=${name} y lastname=${lastname}`)
            }else{
                alert(`El formulario solo admite letras del alfabeto`)
                setIsValid(false)
            }
        }
    }
        


    

    return (
        <div className={styles.container}>
            <Title>11. Form Teacher</Title>
            <h3>Pre-examen parcial</h3>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="nombre"> --- input desde el form --- </label>

                <input
                    id='nombre'
                    name='nombre'
                    onChange={((e) => handlerChange (e, 'nombre'))}
                    placeholder='Ingresa el nombre'
                    value={name}
                    >
                </input>
                
{/* le pasamos la funcion handlerChange al hijo para que el hijo la pueda usar */}
                <InputApellidoTeacher 
                    lastname={lastname}
                    handlerChange={handlerChange}
                    />
            
                <input type="submit" />
                <br />
            
        
                {/* Mostrar tarjeta con datos enviados */}
                {isValid && <Card data={data} />}

                
            </form>
        </div>
    )
}
