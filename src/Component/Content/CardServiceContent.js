import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import ViewContent from "../../FunctionComponent/ViewContent";

const CardServiceContent = ({onClicked,element, id}) => {
    const { t } = useTranslation();
    const navigate=useNavigate()
    const {lang}=useParams()
    const minW = useMediaQuery({query: "(max-width: 500px)"})
    const [isVisible,setIsVisible]=useState(false)
    const [transVisible,setTransVisible]=useState(false)
    useEffect(() => {
        let timeout;
        if (isVisible) {
            timeout = setTimeout(() => setTransVisible(true), id * 100);
        } else {
            setTransVisible(false);
        }
        return () => clearTimeout(timeout);
    }, [id, isVisible]);

    return (
        <ViewContent setIsVisible={setIsVisible} time={150}>
            <div onClick={onClicked} className={`card border-0 shadow ${element.bg} h-100 bg-change ${transVisible ? 'card-transition' : 'invisible'}`}
                 style={{ backgroundImage: `url('${element.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: minW ? '12rem' : '20rem' }}>
                <div className="opacity-overlay rounded-2"/>
                <h3 className={`text-center text ${id===1 || id=== 4 ? 'text-white' : 'text-aris'} fw-bold my-auto`}>{element.text}</h3>
                <div className="position-absolute bottom-0 end-0 p-2 pe-3">
                    <button type="button" onClick={(e)=>{
                        e.preventDefault()
                        navigate(`/${lang}/service#${element.div}`);
                    }} className="btn btn-content btn-light py-2 rounded-1 btnIcon">{t('plus')}</button>
                </div>
            </div>
        </ViewContent>
    )
}

export default CardServiceContent