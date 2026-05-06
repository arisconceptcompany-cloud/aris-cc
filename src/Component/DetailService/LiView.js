import React, { useState} from "react";
import StepLi from "../../FunctionComponent/StepLi";

const LiView = ({onClick,title, isVisible, index}) => {
    const [visible,setVisible]=useState(false)
    return(
        <StepLi index={index} isVisible={isVisible} setTurnOn={setVisible}>
            <li onClick={()=>onClick()} className={`cursor-pointer bg-warning rounded-3 me-1 px-0 py-2 d-flex align-items-center justify-content-center text-center scale ${visible ? 'showTop visible' : 'invisible'}`} >{title}</li>
        </StepLi>
    )
}
export default LiView