import { useState } from 'react'
import styles from '../../styles.module.css'
import { Title } from '../Title';


/*
--------- FORMAS DE VALIDAR LA INFORMACION -------------
A) A medida que la persona va ingresando los datos. // en este caso se controla y ejecuta una accion de validar a medida que trascurre la interaccion del usuario
B) Cuando abandona un campo específico (blur).  // se controla y se ejecuta la accion de validar cuando el usuario sale del input o campo
C) Al momento en que se envía el formulario. // se controla y se ejecuta la accion de validar cuando el usuario da click en el boton del formulario, por ejemplo enviar
*/ 

/** para este ejmemplo vamos a usar la opcion C) Al momento en que se envía el formulario. */

export const FormLogin = () => {

/** 1. un estado para cada input */
    const [userName, setUserName] = useState ("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    
/** 2.1. un manejador de evento para cada input para actualizar los estados */
const onChangeUserName = (e) => setUserName(e.target.value);
const onChangeEmail = (e) => setEmail(e.target.value);
const onChangePassword = (e) => setPassword(e.target.value);

/** 2.2. crear un manejador para el formulario
         * este sera asignado al form "onSubmit={onSubmitForm}"
         * y el boton de enviar del formulario debe tener "type="submit""
         */
/** 5. Utilizamos las funciones de validacion dentro del manejador de eventos que se ejecuta al enviar el formulario */
    const onSubmitForm = (e) => {
        e.preventDefault();

        const isUserNameValid = validateUserName(userName);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        
        console.log(`isEvld ${isEmailValid}`)

        if (isUserNameValid && isPasswordValid && isEmailValid ){
            alert(`Datos validados.
            
            Bienvenido ${userName}`);
        }else {
            alert("Alguno de los datos no es correcto")
        }

        };

/** 4. Crear las validaciones */
        /** para este ejemplo: 
         * name: a) que no tenga espacios en blanco, b) que tenga al menos 3 caracteres
         * email: a) que sea un email valido (contine @ y .com)
         * contraseña: a) que tenga al menos 6 caracteres, b) uno de los caracteres debe ser numero
         */
    const validateUserName = (userName) => {
        const withoutSpaces = userName.trim();
        
        if (withoutSpaces.length > 2) {
            return true;
            } else {
            return false;
            }
    }
    
    /** para este ejemplo utilicé Expresiones Regulares y el metodo test RegExp.test() */
    const validateEmail = (email) => {
        const emailRegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (emailRegExp.test(email)){
            return true;
        } else {
            return false;
        }
    }

        

    const validatePassword = (password) => {
        const withoutSpaces = password.trim();
        const passwordAsArray = withoutSpaces.split("");

        const hasNumber = passwordAsArray.some((char) => {
            if (isNaN(char)){
                return false;
            }else {
                return true;
            }
        });

        if((withoutSpaces.length > 5) && hasNumber) {
            return true;
        }else {
            return false;
        }
    };


/** 3. el formulario que tiene 3 input (name, email y password) y un boton para enviar */
        /** estos usan los manejadores de eventos onChangeXxxxx */
    return (
        <div className={styles.container}>
            <Title>6. Login Form</Title>
            <h3>Log in</h3>
            <form onSubmit={onSubmitForm}>
                <input
                    type='text'
                    placeholder='Name'
                    value={userName}
                    onChange={onChangeUserName}
                />      
                <input 
                    type="text"
                    placeholder='Email Address'
                    value={email}
                    onChange={onChangeEmail}
                />
                <input 
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={onChangePassword}
                />
                <div>
                    <button 
                    type="submit"
                    >Continue</button>
                </div>
            </form>
        </div>
    );
};


/** Nota: algo bueno para implementar a futuro es que indique cuales campos tiene problemas, para dar una mejor experiencia al usuario */