import React from "react";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import Equipement from "../Component/NosAvantage/Equipement";
import InfoAvantage from "../Component/Head/InfoAvantage";
import AppelAvantage from "../Component/Body/AppelAvantage";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NosAnvantage = () => {
    const {lang} = useParams()
    const {t}=useTranslation()

    return(
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t('titleAvantage')}</title>
                <meta name="description" content={t('descAvantage')}/>
                <link rel="alternate" href="https://www.aris-cc.com/en/avantages" hrefLang="en"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/avantages" hrefLang="fr"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/avantages" hrefLang="x-default"/>
                <link rel="canonical" href={`https://www.aris-cc.com/${lang}/avantages`}/>
                <meta property="og:url" content={`https://www.aris-cc.com/${lang}/avantages`} />
                <meta property="og:title" content={t('titleAvantage')} />
                <meta property="og:description" content={t('descAvantage')} />
                <meta name="twitter:title" content={t('titleAvantage')} />
                <meta name="twitter:description" content={t('descAvantage')} />
                <meta name="twitter:url" content={`https://www.aris-cc.com/${lang}/avantages`} />
            </Helmet>
            <HeaderContent active={5}/>
            <InfoAvantage/>
            <Equipement/>
            <AppelAvantage/>
            <AccueilFooter/>
        </>
    )
}

export default NosAnvantage