import React from "react";
import infoE from '../../Asset/info.mp4'
import './EntrepriseInfo.css'
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {FaChevronDown, FaArrowRight} from "react-icons/fa6";


const EntrepriseInfo= ()=>{
    const { t } = useTranslation();
    const {lang}=useParams()

    const scrollToContent = () => {
        const el = document.getElementById('adn');
        if (el) el.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <header className="header">
            <video className="header-video" autoPlay muted loop playsInline preload="auto">
                <source src={infoE} type="video/mp4" />
                {t('videoNotSupported')}
            </video>
            <div className="video-overlay"/>
            <div className="header-content">
                <div className="hero-inner">
                    <h1 className="hero-title">
                        <span className="color-aris">ARIS</span> <span className="color-concept">CONCEPT</span>
                    </h1>
                    <p className="hero-sub">{t('txtHead')}</p>
                    <p className="hero-desc">{t('serv')}</p>
                    <div className="hero-actions">
                        <a href={`/${lang}/service`} className="hero-btn-primary">
                            {t('serUs')}<FaArrowRight size={14}/>
                        </a>
                        <a href={`/${lang}/ebook`} className="hero-btn-ghost">
                            {t('brochure')}
                        </a>
                    </div>
                </div>
            </div>
            <button type="button" className="hero-scroll" onClick={scrollToContent} aria-label="scroll">
                <FaChevronDown size={16}/>
            </button>
        </header>
    )
}
export default EntrepriseInfo
