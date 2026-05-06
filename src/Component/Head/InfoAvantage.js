import React from "react";
import Star from "./Star";
import {useTranslation} from "react-i18next";

const InfoAvantage = () => {
    const {t}=useTranslation()
    return(
        <div className="row bg-gradient-info-dark w-100 text-white mt-0 mx-0 mb-0 position-relative">
            <br/>
            <div className="col-lg-9 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12">
                <h1 className="slideOutToRight p-sm-2 fs-2">
                    {t('infoHead')}
                </h1>
                <p className="fs-5 p-3 m-0 me-2 preAnimation fst-italic font-consolas ">
                    {t('infoContent')}
                </p>
            </div>
            <Star size={'0.13'} left={'90%'} top={'20%'}/>
            <Star size={'0.1'} left={'4%'} top={'20%'}/>
            <Star size={'0.07'} left={'50%'} top={'90%'}/>
            <Star size={'0.1'} left={'12%'} top={'70%'}/>
        </div>
    )
}
export default InfoAvantage