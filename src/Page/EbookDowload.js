import React, {useCallback, useEffect, useMemo, useState} from "react";
import infoE from '../Asset/info.mp4'
import {useMediaQuery} from "react-responsive";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import ViewContent from "../FunctionComponent/ViewContent";
import {Helmet} from "react-helmet";

const EbookDowload = () => {
    const handleDownload = useCallback(() => {
        const link = document.createElement('a');
        link.href = '/BROCHURE_ARIS-Concept.pdf';
        link.download = 'BROCHURE_ARIS-Concept.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },[])
    const maxCol6=useMediaQuery({query: "(max-width: 1100px)"})
    const minW = useMediaQuery({query: "(min-width : 1100px)"})
    const minWidth=useMediaQuery({query: "(max-width: 551px)"})
    const wDnone = useMediaQuery({query :"(max-width: 436px)"})
    const hMin = useMediaQuery({query : "(max-height : 771px)"})

    const ratio= useMemo(() => {
        return window.innerWidth / window.innerHeight;
    }, []);
    const {t, i18n} = useTranslation()
    const { lang } = useParams()
    useEffect(()=>{
        if (lang && ['fr', 'en'].includes(lang)) {
            i18n.changeLanguage(lang);
        }
    },[lang])
    const [viewHeader, setViewHeader]=useState(false)
    const [viewContent, setViewContent]=useState(false)
    const [viewFooter,setViewFooter]=useState(false)
    return(
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t('titleEbook')}</title>
                <meta name="description" content={t('descEbook')}/>
                <link rel="alternate" href="https://www.aris-cc.com/en/ebook" hrefLang="en"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/ebook" hrefLang="fr"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/ebook" hrefLang="x-default"/>

                <meta property="og:url" content={`https://www.aris-cc.com/${lang}/ebook`} />
                <meta property="og:title" content={t('titleEbook')} />
                <meta property="og:description" content={t('descEbook')} />
                <meta name="twitter:title" content={t('titleEbook')} />
                <meta name="twitter:description" content={t('descEbook')} />
                <meta name="twitter:url" content={`https://www.aris-cc.com/${lang}/ebook`} />
            </Helmet>
            <div className="vh-100 bg-dark bg-opacity-10 w-100 p-0 m-0">
                <div className="row p-0 m-0 w-100 h-100">
                    <div className={wDnone ? 'd-none' : `h-100 ${maxCol6 ? 'col-12': 'col-6'} d-flex justify-content-center align-items-center`}>
                        <div className={` ${minWidth ? 'm-0 p-0 w-100' : 'm-0 p-0 w-75'}`}>
                            <video
                                src={infoE}
                                controls
                                className="w-100 p-0 m-0 shadow-lg"
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </div>
                    <div className={`${!hMin && ratio>1 ? 'h-100' : ''} ${maxCol6 ? 'col-12 px-3 pt-2': 'col-6 px-4 pt-3'} bg-gradient-info-dark position-relative  d-flex flex-column justify-content-center`}>
                        <ViewContent setIsVisible={setViewHeader} time={100}>
                            <h3 dangerouslySetInnerHTML={{
                                __html: t('DecStrat')
                            }} className={`${viewHeader ? 'showTop' : 'invisible'} ${wDnone ? 'mx-1' : 'mx-4'} text-white`} style={{fontSize: '2.5rem', letterSpacing: '0.1rem'}}/>
                        </ViewContent>
                        <ViewContent setIsVisible={setViewContent} time={250}>
                            <p className={`mt-3 pt-3 px-2 text-white ${viewContent ? 'showTop' : 'invisible'}`} style={{letterSpacing: '0.085rem'}}>
                                {t('textDecStrat')}
                            </p>
                        </ViewContent>
                        <ViewContent className={`d-flex mb-3 mx-0 px-0 pb-3 justify-content-center ${hMin && ratio<1 ? 'position-relative' : 'position-absolute'}  bottom-0 ${minW ? 'w-100 ' : !hMin && ratio <1 ? 'width-padding2rem' : 'mt-2'}`} time={350} setIsVisible={setViewFooter}>
                            <button onClick={handleDownload} className={`btn btn-lg bg-info text-white btn-content rounded-3 ${viewFooter ? 'showBottom' : 'invisible'}`} style={{letterSpacing: '0.085rem'}}>{t('ebook')}</button>
                        </ViewContent>
                    </div >
                </div>
            </div>
        </>
    )
}

export default EbookDowload