import React from "react";
import {useTranslation} from "react-i18next";
import Star from "./Star";
import './../Contact/ContactModern.css';

const InfoContact = () => {
    const {t} = useTranslation()
    return(
        <section className="contact-hero">
            <div className="contact-hero-inner">
                <h1 className="contact-hero-title">{t('conT')}</h1>
                <p className="contact-hero-sub">{t('conC')}</p>
            </div>
            <Star size={'0.2'} left={'90%'} top={'24%'}/>
            <Star size={'0.15'} left={'5%'} top={'22%'}/>
            <Star size={'0.08'} left={'48%'} top={'86%'}/>
            <Star size={'0.11'} left={'13%'} top={'72%'}/>
        </section>
    )
}
export default InfoContact
