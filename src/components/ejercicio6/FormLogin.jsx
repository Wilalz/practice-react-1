import { useState } from 'react'
import styles from '../../styles.module.css'
import { Title } from '../Title';


/*
--------- FORMAS DE VALIDAR LA INFORMACION -------------
A) A medida que la persona va ingresando los datos. // en este caso se controla y ejecuta una accion de validar a medida que trascurre la interaccion del usuario
B) Cuando abandona un campo específico (blur).  // se controla y se ejecuta la accion de validar cuando el usuario sale del input o campo
C) Al momento en que se envía el formulario. // se controla y se ejecuta la accion de validar cuando el usuario da click en el boton del formulario, por ejemplo enviar
*/ 

/** para este ejemplo vamos a usar la opcion C) Al momento en que se envía el formulario. */
/** La idea seria que si alguno de los campos no cumple la validacion, 
 *      se muestra un mensaje de error 
 *      y "no enviamos los datos al servidor" */

export const FormLogin = () => {

/** 2. un estado para cada input */
    const [userName, setUserName] = useState ("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    
/** 3.1. un manejador de evento para cada input para actualizar los estados */
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

/** 3.2. crear un manejador para el formulario
         * este sera asignado al form "onSubmit={onSubmitForm}"
         * y el boton de enviar del formulario debe tener "type="submit""
         */
/** 6. Utilizamos las funciones de validacion dentro del manejador de eventos que se ejecuta al enviar el formulario */
    const onSubmitForm = (e) => {
        e.preventDefault();

        const isUserNameValid = validateUserName(userName);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        
        // console.log(`isEmailValid ${isEmailValid}`)

        if (isUserNameValid && isPasswordValid && isEmailValid ){
            alert(`Datos validados.
            
            Bienvenido ${userName}`);
        }else {
            alert("Alguno de los datos no es correcto")
        }

        };

/** 5.1. Crear las validaciones */
        /** para este ejemplo: 
         * name: a) que no tenga espacios en blanco, b) que tenga al menos 3 caracteres
         * email: a) que sea un email valido (contiene "@"" y ".com")
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
    
/** 5.2. para este ejemplo utilicé Expresiones Regulares y el metodo RegExp.test() */
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

/** 1. Crear la estructura basica del fomulario, este tiene 3 input (name, email y password) y un boton para enviar*/
/** 4. Los imputs usan los manejadores de eventos onChangeXxxxx  */
    return (
        <div className={styles.container}>
            <Title>6. Login Form</Title>
            <h3>Log in</h3>
            <br /> 
            <p>Nombre mayor a 3 caracteres,</p>
            <p>Email valido tiene "@" y un dominio</p>
            <p>Contraseña mayor a 5 caracteres y al menos un numero</p>
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


/** Nota: Implementar a futuro para dar una mejor experiencia al usuario
 *      indique las caracteristicas que debe tener cada campo y
 *      si no cumple, indicar cuales campos que tienen problemas, */