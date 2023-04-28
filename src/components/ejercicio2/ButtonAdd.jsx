import styles from "../../styles.module.css"

export const ButtonAdd = ({children, setQuantity, quantity}) => {

    const handlerOnClick = () => {
        setQuantity(quantity+1)
    }

    return (
        <button 
            className={styles.btnCount}
            onClick={e => handlerOnClick()}>
            {children}
        </button>
    )
}