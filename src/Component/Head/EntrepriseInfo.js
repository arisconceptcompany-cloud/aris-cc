import React, {useCallback, useEffect, useMemo, useState} from "react";
import infoE from '../../Asset/info.mp4'
import './EntrepriseInfo.css'
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import logo from "../../Asset/icon.png";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";


const EntrepriseInfo= ()=>{
    const { t } = useTranslation();
    const {lang}=useParams()
    const wMax = useMediaQuery({ query: "(max-width: 1034px)" });
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    const splitText = useCallback( (text) => {
        return text.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  {char === " " ? "\u00A0" : char}
            </span>
        ));
    }, []);

    return (
        <>
            <header className="header">
                <video className="header-video" autoPlay muted loop preload="auto">
                    <source src={infoE} type="video/mp4" />
                    {t('videoNotSupported')}
                </video>
                <div className="video-overlay"/>
                <div className={`w-100 p-3 position-relative d-flex justify-content-center ${wMax ? 'd-none' : ''}`}>
                    <img src={logo} alt="logo" className="logo-img img-fluid"/>
                </div>
                <div className="header-content p-0">
                    <div className="row w-100 m-0 p-0 text-white">
                        <div className="text-center" >
                            <h1 className="slideOutToRight p-0 m-0 fs-2 p-sm-2">
                                <strong className="fs-1 color-aris">ARIS </strong> <strong className="fs-1 color-concept">CONCEPT</strong>
                                <br/>
                                <br/>
                                <span className="fw-bold ">
                                     {t('txtHead')}
                                </span>
                                <br/>
                                <br/>
                                {t('serv')}
                            </h1>
                        </div>
                    </div>
                </div>
                <OverlayTrigger placement="bottom" overlay={
                        <Tooltip id={`tooltip-${1}`}>
                            <div className="position-relative py-2">
                                <span className=" ">{t('dBr')}</span>
                            </div>
                        </Tooltip>
                    }
                >
                    <div className="position-absolute d-flex z-2 justify-content-center w-100 bottom-0">
                        <a href={`/${lang}/ebook`} type="button" className={`btn ${animate ? 'wave-effect' : ''} mb-4 btn-style btn-lg px-4 py-3 rounded-3`}  style={{ transition: 'background-color 700ms ease-in-out', letterSpacing: '0.085rem'}}>
                            {splitText(t('brochure'))}<i className="fa-solid fa-chevron-right ms-2"/>
                        </a>
                    </div>
                </OverlayTrigger>
            </header>
        </>
    )
}
export default EntrepriseInfo