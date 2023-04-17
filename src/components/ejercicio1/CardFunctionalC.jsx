import styles from "./styles.module.css"
import {useState} from "react"


// title: "Clase",
// body: "Este es un componente de clase"

export const CardFunctionalC = () => {
    const [title, setTitle] = useState("Funcional");
    const [body, setBody] = useState("Este es un componente de funcional");
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
    
}