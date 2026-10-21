import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import ViewContent from "../../FunctionComponent/ViewContent";

const CardServiceContent = ({onClicked,element, id}) => {
    const { t } = useTranslation();
    const navigate=useNavigate()
    const {lang}=useParams()
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
            <div onClick={onClicked} className={`ac-mini ${transVisible ? 'ac-card-in' : 'invisible'}`}>
                <img src={element.img} decoding={"async"} className="ac-mini-img" alt={element.text}/>
                <div className="ac-mini-shade"/>
                <div className="ac-mini-foot">
                    <h3 className="ac-mini-title">{element.text}</h3>
                    <button type="button" onClick={(e)=>{
                        e.preventDefault()
                        navigate(`/${lang}/service#${element.div}`);
                    }} className="ac-mini-btn">{t('plus')}</button>
                </div>
            </div>
        </ViewContent>
    )
}

export default CardServiceContent
