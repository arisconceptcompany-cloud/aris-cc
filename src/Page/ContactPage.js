import React from "react";
import InfoContact from "../Component/Head/InfoContact";
import ContatctContainer from "../Component/ContatctContainer";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ContactPage = () => {
    const {lang} = useParams()
    const {t}=useTranslation()
    return (
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t('titleContact')}</title>
                <meta name="description" content={t('descContact')}/>
                <link rel="alternate" href="https://www.aris-cc.com/en/contact" hrefLang="en"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/contact" hrefLang="fr"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/contact" hrefLang="x-default"/>
                <link rel="canonical" href={`https://www.aris-cc.com/${lang}/contact`}/>
                <meta property="og:url" content={`https://www.aris-cc.com/${lang}/contact`} />
                <meta property="og:title" content={t('titleContact')} />
                <meta property="og:description" content={t('descContact')} />
                <meta name="twitter:title" content={t('titleContact')} />
                <meta name="twitter:description" content={t('descContact')} />
                <meta name="twitter:url" content={`https://www.aris-cc.com/${lang}/contact`} />
            </Helmet>
            <HeaderContent active={4}/>
            <InfoContact/>
            <ContatctContainer/>
            <AccueilFooter/>
        </>
    )
}
export default ContactPage