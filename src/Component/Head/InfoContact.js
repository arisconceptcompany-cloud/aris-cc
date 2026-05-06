import React from "react";
import Star from "./Star";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "react-responsive";

const InfoContact = () => {
    const {t} = useTranslation()
    const col12=useMediaQuery({query: "(max-width: 768px)"})
    return(
        <div className="row bg-gradient-info-dark w-100 text-white mx-0 mb-3 position-relative">
            <br/>
            <div className="col-lg-9 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12">
                {col12 ? (
                    <>
                        <h1 className="slideOutToRight p-sm-2 fs-2 mb-4">{t('conC')}</h1>
                    </>
                ): (
                 <>
                     <h1 className="slideOutToRight p-sm-2 fs-2">{t('conT')}</h1>
                     <p className="fs-5 p-3 m-0 preAnimation fst-italic font-consolas" aria-label="description">{t('conC')}</p>
                 </>
                )}
            </div>
            <Star size={'0.2'} left={'90%'} top={'20%'}/>
            <Star size={'0.15'} left={'4%'} top={'20%'}/>
            <Star size={'0.07'} left={'50%'} top={'80%'}/>
            <Star size={'0.1'} left={'12%'} top={'70%'}/>
        </div>
    )
}
export default InfoContact