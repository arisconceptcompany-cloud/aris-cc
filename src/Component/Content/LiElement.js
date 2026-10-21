import React, {useCallback, useState} from "react";
import StepLi from "../../FunctionComponent/StepLi";
import {FaRegCircleDot} from "react-icons/fa6";

const LiElement = ({lang,jobDetail, isVisible, index}) => {
    const [visible,setVisible]=useState(false)
    const handleClick = useCallback((url) => {
        window.location.href = url;
    },[])
    return(
        <StepLi index={index} isVisible={isVisible} setTurnOn={setVisible}>
            <li onClick={()=>handleClick(`/${lang}/service/${jobDetail.parentId}/${jobDetail.id}`)} className={`ac-job-item ${visible ? 'showTop visible' : 'invisible'}`}>
                <a onClick={(e)=>e.preventDefault()} href={`/${lang}/service/${jobDetail.parentId}/${jobDetail.id}`}>
                    <span> <FaRegCircleDot className="ac-job-dot"/>{jobDetail.title[lang]}</span>
                </a>
            </li>
        </StepLi>
    )
}
export default LiElement
