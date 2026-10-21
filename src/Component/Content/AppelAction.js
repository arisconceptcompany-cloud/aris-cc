import React, {useState} from "react";
import statistique from '../../Asset/ofre.png'
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import ViewContent from "../../FunctionComponent/ViewContent";

const AppelAction = () => {
    const { t } = useTranslation();
    const { lang } = useParams()
    const [visible,setVisible]=useState(false)
    return (
        <ViewContent className={`ac-cta-wrap ${visible ? 'slideOutToRight' : 'invisible'}`} time={0} setIsVisible={setVisible}>
            <section className="ac-section ac-cta">
                <div className="ac-container">
                    <div className="ac-cta-banner">
                        <div className="ac-cta-media">
                            <img src={statistique} draggable={"false"} decoding={"async"} alt="stat"/>
                        </div>
                        <div className="ac-cta-body">
                            <span className="ac-eyebrow ac-eyebrow-glass">{t('aide')}</span>
                            <h2 className="ac-cta-title">{t('decService')}</h2>
                            <p className="ac-cta-text">{t('devService')}</p>
                            <div className="ac-cta-actions">
                                <a href={`/${lang}/service`} className="btn btn-primary btn-lg">{t('serUs')}</a>
                                <a href={`/${lang}/contact`} className="btn btn-light btn-lg">{t('contactez')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ViewContent>
    )
}
export default AppelAction
