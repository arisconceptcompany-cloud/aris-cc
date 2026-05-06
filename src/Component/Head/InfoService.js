import React from "react";
import {useTranslation} from "react-i18next";
import Star from "./Star";

const InfoService = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="row bg-gradient-info-dark w-100 text-white mt-0 mx-0 mb-3 position-relative">
                <br/>
                <div className="col-lg-9 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12">
                    <h2 className="slideOutToRight p-sm-2 fs-4">
                        <strong style={{ color: '#D10D58' }}>ARIS </strong> <strong style={{ color: '#0e8de8' }}>CONCEPT</strong> {t('introService')}
                    </h2>
                    <p className="fs-5 p-3 m-0 me-2 preAnimation fst-italic font-consolas ">{t('descService')}</p>
                </div>
                <Star size={'0.13'} left={'90%'} top={'20%'}/>
                <Star size={'0.1'} left={'4%'} top={'20%'}/>
                <Star size={'0.07'} left={'50%'} top={'90%'}/>
                <Star size={'0.1'} left={'12%'} top={'70%'}/>
            </div>
        </>
    )
}

export default InfoService