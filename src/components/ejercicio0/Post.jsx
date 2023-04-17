import styles from "../../styles.module.css"
import { useState } from "react"

export const Post = ({text}) => {
    const [likes, setLikes] = useState(0);

    return (
        <div className={styles.btnCount}>
            <button 
                onClick={ ()=> setLikes(likes+1) }>
                {text}
            </button>
            <div className={styles.cardLikes}><span className={styles.quantity}>{likes}</span> &nbsp; me gusta!</div>
        </div>
    )
    
}