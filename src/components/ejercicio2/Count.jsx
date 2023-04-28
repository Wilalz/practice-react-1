import styles from "../../styles.module.css"
import { ElephantEmoji } from "./elephantEmoji"

export const Count = ({quantity}) => {
    return (
        <div className={styles.cardLikes}>
            <span className="quantity">{quantity}</span>
            <ElephantEmoji />
        </div>

    )

}