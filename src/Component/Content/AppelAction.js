import React, {useState} from "react";
import statistique from '../../Asset/ofre.png'
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import ViewContent from "../../FunctionComponent/ViewContent";

const AppelAction = () => {
    const { t } = useTranslation();
    const { lang } = useParams()
    const wMaxText = useMediaQuery({ query: "(max-width: 994px) and (min-width: 768px)" });
    const minWidth = useMediaQuery({query: "(max-width: 767px)"})
    const [visible,setVisible]=useState(false)
    return (
        <>
            <ViewContent className={`${visible ? 'slideOutToRight' : 'invisible'} ${minWidth ? '' : 'container'} bg-dark bg-opacity-10`} time={0} setIsVisible={setVisible}>
                <div className={`row ${minWidth ? 'p-0' : 'p-3'} w-100 mx-0 mt-4`}>
                    <div className={`${minWidth ? 'col-12 d-flex justify-content-center': wMaxText ? 'col-5 bg-primary-subtle' : 'col-3 offset-2 bg-primary-subtle'}`}>
                        <img src={statistique} draggable={"false"} decoding={"async"} alt="stat"  height={200}/>
                    </div>
                    <div className={`${minWidth ? 'col-12' : 'col-7 position-relative'}`}>
                        <div className="mt-2">
                            <span className="small text-body-emphasis p-3 mb-3">{t('aide')}</span>
                            <h3 className="my-3 text-concept fw-bolder">{t('decService')}</h3>
                            <h5>{t('devService')}</h5>
                        </div>
                        <div className={`${minWidth ? 'w-100 py-2 px-0 d-flex justify-content-between' : ' w-100 position-absolute bottom-0 row m-0 px-0 pt-0 pb-2'}`}>
                            <div className={`${minWidth ? '' : 'col-6'}`}>
                                <a href={`/${lang}/service`} className="btn btn-content btn-primary w-100 py-2 fw-bolder rounded-1">{t('serUs')}</a>
                            </div>
                            <div className={`${minWidth ? '' : 'col-6'}`}>
                                <a href={`/${lang}/contact`} className="btn btn-content btn-info py-2 fw-bolder w-100 rounded-1">{t('contactez')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ViewContent>
        </>
    )
}
export default AppelAction