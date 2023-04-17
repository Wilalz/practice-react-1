import { Title } from "../Title"
import { ElephantEmoji } from "./elephantEmoji"
import { ButtonAdd } from "./ButtonAdd"
import { Count } from "./Count"
import { useState } from "react"
import { SpiderWeb } from "./SpiderWeb"

export const CardGroup = () => {
    const [quantity, setQuantity] = useState(0);





    return (
        <div className="card-elephants">
            <Title>Add Elephants
                <ElephantEmoji />
            </Title>
            <ButtonAdd className="btn-count" 
                quantity={quantity} setQuantity={setQuantity}
                >Add
            </ButtonAdd>
            {/* <div className="elephants-group">{quantity}</div> */}
            <SpiderWeb quantity={quantity} />
            <Count quantity={quantity}/>


        </div>




    )




}

// export const CardGroup = () => {
//     const [quantity, setQuantity] = useState(0);

//     const handlerOnClick = () => { 
//         setQuantity(quantity+1) 
//     }

//     return (
//         <div className="card-elephants">
//             <Title>Add Elephants
//                 <ElephantEmoji />
//             </Title>
//             <button className="btn-count"
//                 onClick={e => handlerOnClick()}>
//                 Add
//             </button>
//             <div className="elephants-group"></div>
//             <Count quantity={quantity}/>


//         </div>




//     )




// }