import { useState } from "react"

export const Post = ({text}) => {
    const [likes, setLikes] = useState(0);


    return (
        <div>
            <button onClick={ ()=> setLikes(likes+1) }>
                {text}
            </button>
            <div>{likes}</div>
        </div>
    )



}