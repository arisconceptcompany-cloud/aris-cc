import React from 'react'
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import InfoApropos from "../Component/Head/InfoApropos";
import QuiSommeNous from "../Component/APropos/QuiSommeNous";
import NosEquipe from "../Component/APropos/NosEquipe";
import NosValeur from "../Component/APropos/NosValeur";
import AppelAvantage from "../Component/Body/AppelAvantage";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Apropos = () => {
    const {lang} = useParams()
    const {t}=useTranslation()
    return (
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t('titleApropos')}</title>
                <meta name="description" content={t('descApropos')}/>
                <link rel="alternate" href="https://www.aris-cc.com/en/apropos" hrefLang="en"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/apropos" hrefLang="fr"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/apropos" hrefLang="x-default"/>
                <link rel="canonical" href={`https://www.aris-cc.com/${lang}/apropos`}/>
                <meta property="og:url" content={`https://www.aris-cc.com/${lang}/apropos`} />
                <meta property="og:title" content={t('titleApropos')} />
                <meta property="og:description" content={t('descApropos')} />
                <meta name="twitter:title" content={t('titleApropos')} />
                <meta name="twitter:description" content={t('descApropos')} />
                <meta name="twitter:url" content={`https://www.aris-cc.com/${lang}/apropos`} />
            </Helmet>
            <HeaderContent active={3}/>
            <InfoApropos/>
            <QuiSommeNous/>
            <NosValeur/>
            <AppelAvantage/>
            <NosEquipe/>
            <AccueilFooter/>
        </>
    )
}
export default Apropos