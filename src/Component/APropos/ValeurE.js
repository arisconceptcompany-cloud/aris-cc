import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import StepLi from "../../FunctionComponent/StepLi";

const ValeurE = ({emplacement,img,text,title,isVisible,ind}) => {
    const maxW=useMediaQuery({query: "(max-width: 590px)"})
    const [vStep, setVStep] = useState(false)
    const [vPhoto, setVPhoto] = useState(false)
    useEffect(()=>{
        let timeOut
        if (vStep){
            timeOut = setTimeout(()=>setVPhoto(true),100)
        }else{
            setVPhoto(false)
        }
        return () => clearTimeout(timeOut);
    },[vStep])
    return(
        <StepLi isVisible={isVisible} index={ind+1} setTurnOn={setVStep}>
            {maxW ? (
                <>
                    <div className={` mx-0 mt-3 mb-2 p-0 ${maxW ? '' : 'd-flex justify-content-between align-items-center'}`}>
                        <div className={`${vStep ? 'showTop' : 'invisible'} ${maxW ? 'w-100' : 'w-auto me-5'}`}>
                            <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">{emplacement + 1}.</span>{title}</span>
                            <p className="fs-5 p-2">
                                {text}
                            </p>
                        </div>
                        <div className={`${vPhoto ? 'showBottom' : 'invisible'} ${maxW ? 'w-100' : 'width-max'}`}>
                            <img decoding={"async"} className={`${maxW ? 'w-100 rounded-3' : ''}`} src={img} alt={title}/>
                        </div>
                    </div>
                </>
            ) : emplacement % 2===0 ? (
                <div className={`mx-0 mt-3 mb-2 p-0 d-flex justify-content-between align-items-center`}>
                    <div className={`${vStep ? 'arrow-div' : 'invisible'} w-auto me-5`}>
                        <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">{emplacement + 1}.</span>{title}</span>
                        <p className="fs-5 p-2">
                            {text}
                        </p>
                    </div>
                    <div className={`${vPhoto ? 'arrow-div-left' : 'invisible'} width-max`}>
                        <img decoding={"async"} src={img} alt={title}/>
                    </div>
                </div>
            ) : (
                <div className={`mx-0 mt-3 mb-2 p-0 d-flex justify-content-between align-items-center`}>
                    <div className={`w-auto ${vPhoto ? 'arrow-div' : 'invisible'}`}>
                        <img decoding={"async"} src={img} alt={title}/>
                    </div>
                    <div className={`${vStep ? 'arrow-div-left' : 'invisible'} ms-5`}>
                        <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">{emplacement + 1}.</span>{title}</span>
                        <p className="fs-5 p-2">
                            {text}
                        </p>
                    </div>
                </div>
            )}
        </StepLi>
    )
}
export default ValeurE