import React from "react";
import InfoPostule from "../Component/Head/InfoPostule";
import CandidatureSpontane from "../Component/CandidatureSpontane";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const PostulerPage = () => {
    const {lang} = useParams()
    const {t}=useTranslation()
    return (
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t('titleCarrier')}</title>
                <meta name="description" content={t('descCarrier')}/>
                <link rel="alternate" href="https://www.aris-cc.com/en/carrier" hrefLang="en"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/carrier" hrefLang="fr"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/carrier" hrefLang="x-default"/>
                <link rel="canonical" href={`https://www.aris-cc.com/${lang}/carrier`}/>
                <meta property="og:url" content={`https://www.aris-cc.com/${lang}/carrier`} />
                <meta property="og:title" content={t('titleCarrier')} />
                <meta property="og:description" content={t('descCarrier')} />
                <meta name="twitter:title" content={t('titleCarrier')} />
                <meta name="twitter:description" content={t('descCarrier')} />
                <meta name="twitter:url" content={`https://www.aris-cc.com/${lang}/carrier`} />
            </Helmet>
            <HeaderContent active={6}/>
            <InfoPostule/>
            {/*<OffreEmploye/>*/}
            <CandidatureSpontane/>
            <AccueilFooter/>
        </>
    )
}
export default PostulerPage