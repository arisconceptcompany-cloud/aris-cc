import React, {useState} from "react";
import StepLi from "../../FunctionComponent/StepLi";
import {FaAsterisk} from "react-icons/fa6";

const ViewDesc = ({index,isVisible,strong,text}) => {
    const [on, setOn] = useState(false);
    return(
        <StepLi index={index} isVisible={isVisible} setTurnOn={setOn}>
            <li  className={`list-group-item d-flex align-items-center ${on ? 'showTop' : 'invisible'}`}>
                <FaAsterisk className="me-3 color-dark-concept"/>
                <span>
                    <strong className="text-primary">{strong}</strong>
                    {text && `: ${text}`}
                </span>
            </li>
        </StepLi>
    )
}
export default ViewDesc