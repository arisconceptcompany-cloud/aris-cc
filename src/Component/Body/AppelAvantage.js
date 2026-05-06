import React from "react";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const AppelAvantage = () => {
    const {lang}=useParams()
    const {t}=useTranslation()
    return(
        <>
            <div className="mt-3 w-100 mx-0 mb-0 px-0 py-4 text-center ">
                <span className="display-6">
                     {t('sv')} <strong className="text-aris fw-bold">Aris</strong> <strong className="text-concept fw-bold"> Concept</strong> ?
                </span>
                <div className="mt-3 d-flex justify-content-center px-1">
                    <a href={`/${lang}/contact`} className="me-3 btn btn-content btn-lg rounded-3 btn-primary">
                        {t('contactez')}
                    </a>
                    <a href={`/${lang}/service`} className="ms-3 btn btn-content btn-lg rounded-3 btn-light">
                        {t('service')}
                    </a>
                </div>
            </div>
        </>
    )
}

export default AppelAvantage