import React from "react";
import {useTranslation} from "react-i18next";

const InfoPostule = () => {
    const {t}=useTranslation()
    return(
        <>
            <div className="row bg-gradient-info-dark w-100 text-white mx-0 mb-3">
                <br/>
                <div className="col-lg-9 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12">
                    <h1 className="slideOutToRight p-sm-2 fs-2">
                        {t('Env')}
                    </h1>
                    <p className="fs-5 p-3 m-0 me-2 preAnimation fst-italic font-consolas" dangerouslySetInnerHTML={{
                        __html: t('envContent')
                    }}/>
                </div>
            </div>
        </>
    )
}
export default InfoPostule