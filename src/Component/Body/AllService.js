import React, {useCallback, useMemo, useState} from "react";
import DetailService from "./DetailService";
import {useTranslation} from "react-i18next";
import cp from '../../Asset/comptable.png'
import traitement from '../../Asset/traitement.png'
import rh from '../../Asset/ressources humaines.png'
import extAdd from '../../Asset/Externalisation administrative.png'
import web from '../../Asset/Web et Marketing.png'
import {JobData as metier} from "../../Config/Job";
import {useNavigate, useParams} from "react-router-dom";
import ShowModalDevis from "./ShowModalDevis";
import {useMediaQuery} from "react-responsive";
import ViewDetailService from "../DetailService/ViewDetailService";

const AllService = () => {
    const { t, i18n } = useTranslation();
    const services= useMemo(() => {
        return [
            {id: 1, div: 'accounting', image: cp, trans: t('aideSur'), title: t('compta'), text: t('introCompta')},
            {id: 4, div: 'info', image: traitement, trans: t('cela'), title: t('info'), text: t('introTraitement')},
            {id: 5, div: 'hr', image: rh, trans: t('apport'), title: t('rh'), text: t('introRh')},
            {id: 2, div: 'ext', image: extAdd, trans: t('aideGerer'), title: t('ext'), text: t('introExt') },
            {id: 3, div: 'web-marketing', image: web, trans: t('aideSurF'), title: t('marketing'), text: t('introMark')},
        ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language, t]);
    const navigate=useNavigate()
    const { lang } = useParams()
    const [clickModal,setClickModal]=useState(false)
    const [title,setTitle]=useState('')
    const setHideModal = useCallback((value, tl) => {
        setClickModal(!value)
        setTitle(tl)
    },[])
    const wMax=useMediaQuery({query: "(max-width: 999px)"})
    return (
        <>
            {services.map((data,index)=>(
                <DetailService t={t} wMax={wMax} clicked={()=>setHideModal(false,data.title)} key={index} position={index+1} element={data}>
                    <ViewDetailService index={index} lang={lang} data={data} wMax={wMax} navigate={navigate} metier={metier}/>
                </DetailService>
            ))}
            {clickModal && (
                <ShowModalDevis t={t} title={title} show={clickModal} onHide={()=>setHideModal(true,'')}/>
            )}
        </>
    )
}

export default AllService