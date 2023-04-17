export const ButtonAdd = ({children, setQuantity, quantity}) => {

    const handlerOnClick = () => {
        setQuantity(quantity+1)
    }
    return (
        <button className="btn-count"
        onClick={e => handlerOnClick()}>
            {children}
        </button>
    )


}