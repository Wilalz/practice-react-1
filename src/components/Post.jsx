import { useState } from "react"

export const Post = ({text}) => {
    const [likes, setLikes] = useState(0);

    return (
        <div className="btn-count">
            <button 
                onClick={ ()=> setLikes(likes+1) }>
                {text}
            </button>
            <div className="card-likes"><span className="quantity">{likes}</span> &nbsp; me gusta!</div>
        </div>
    )
    
}