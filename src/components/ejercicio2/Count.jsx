import { ElephantEmoji } from "./elephantEmoji"

export const Count = ({quantity}) => {
    return (
        <div className="card-likes">
            <span className="quantity">{quantity}</span>
            <ElephantEmoji />
        </div>

    )

}