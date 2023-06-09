import styles from "../../styles.module.css"
import { useState } from "react"
import { Title } from '../Title'

export const Post = ({text}) => {
    const [likes, setLikes] = useState(0);

    return (
        <>
            <Title>1. Contador</Title>
            <div className={styles.btnCount}>
                <button 
                    onClick={ ()=> setLikes(likes+1) }>
                    {text}
                </button>
                <div className={styles.cardLikes}><span className={styles.quantity}>{likes}</span> &nbsp; me gusta!</div>
            </div>
        </>
    )
    
}

// En un archivo puedo tener dentro varios componentes que retornan cosas diferentes
// al momento de importarlos dentro de otros archivos debo diferenciar cual exactamente requiero


export const Post2 = ({text}) => {

    const [views, setViews] = useState(0);

    return (
        <div className={styles.btnCount}>
            <button onClick={ () => setViews (views+1)} >
                😎
            </button>

            <div className={styles.cardLikes}><span className={styles.quantity}>{views}</span> &nbsp; Views</div>
        </div>
    )
    
}

export default Post
