import React from "react";
import Star from "./Star";
import {useTranslation} from "react-i18next";
import './../NosAvantage/Avantage.css';

const InfoAvantage = () => {
    const {t}=useTranslation()
    return(
        <section className="av-hero">
            <div className="av-hero-inner">
                <h1 className="av-hero-title">{t('infoHead')}</h1>
                <p className="av-hero-sub">{t('infoContent')}</p>
            </div>
            <Star size={'0.13'} left={'90%'} top={'22%'}/>
            <Star size={'0.1'} left={'5%'} top={'22%'}/>
            <Star size={'0.07'} left={'50%'} top={'88%'}/>
            <Star size={'0.1'} left={'12%'} top={'72%'}/>
        </section>
    )
}
export default InfoAvantage
