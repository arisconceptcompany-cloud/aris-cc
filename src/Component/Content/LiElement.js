import React, {useCallback, useState} from "react";
import StepLi from "../../FunctionComponent/StepLi";

const LiElement = ({lang,jobDetail, isVisible, index}) => {
    const [visible,setVisible]=useState(false)
    const handleClick = useCallback((url) => {
        window.location.href = url;
    },[])
    return(
        <StepLi index={index} isVisible={isVisible} setTurnOn={setVisible}>
            <li onClick={()=>handleClick(`/${lang}/service/${jobDetail.parentId}/${jobDetail.id}`)} className={`cursor-pointer scale ${visible ? 'showTop visible' : 'invisible'}`}>
                <a onClick={(e)=>e.preventDefault()} href={`/${lang}/service/${jobDetail.parentId}/${jobDetail.id}`} className="text-decoration-none w-100 h-100 text-dark">
                    <span> <i className="far fa-dot-circle text-aris me-1"/>{jobDetail.title[lang]}</span>
                </a>
            </li>
        </StepLi>
    )
}
export default LiElement