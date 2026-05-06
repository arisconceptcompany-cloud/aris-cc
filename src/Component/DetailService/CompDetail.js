import React, {useCallback, useEffect, useMemo, useState} from "react";
import Devis from "../Body/Devis";
import {useParams} from "react-router-dom";
import Pagination from "../Body/Pagination";
import ShowModalDevis from "../Body/ShowModalDevis";
import {useMediaQuery} from "react-responsive";
import {useTranslation} from "react-i18next";
import H4Avantage from "../NosAvantage/H4Avantage";
import ViewContent from "../../FunctionComponent/ViewContent";
import ViewDesc from "./ViewDesc";

const CompDetail = ({element,parent}) => {
    const {lang}=useParams()
    const [idActive,setActive]=useState(1)
    const maxWidth=useMediaQuery({query: "(max-width: 999px)"})
    const paginate= useMemo(() => {
        return maxWidth ? 3 : 5
    }, [maxWidth]);
    const len= useMemo(() => {
        const valiny=parent?.children.length%paginate
        if (valiny===0){
            return parent?.children.length/paginate
        }
        return Math.floor(parent?.children.length/paginate)+1
    }, [parent,paginate]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setActive((prev)=>(prev>=len ? 1 : prev+1));
        }, 3700);

        return () => clearInterval(intervalId);
    }, [len]);

    const [clickModal,setClickModal]=useState(false)
    const setHideModal = useCallback((value) => {
        setClickModal(!value)
    },[])
    const {t}=useTranslation()
    const [vSpan, setVSpan] = useState(false);
    const [vUl, setVUl] = useState(false);
    const [vDevis, setVDevis] = useState(false);
    return(
        <>
            <div className=" w-100 row p-0 m-0">
                <div className={`${maxWidth ? 'col-12' : 'col-7'}`}>
                    <H4Avantage text={element?.title[lang]} isWidthMax={false}/>
                    <div className="mt-3 p-2 w-100">
                        <p className="fs-5 showTop">
                            {element?.description[lang]}
                        </p>
                        <ViewContent setIsVisible={setVSpan} time={250}>
                             <span className={`display-6 ms-3 color-cyan d-inline-block ${vSpan ? 'arrow-div' : 'invisible'}`}>
                                <i className="me-1 fa fa-minus"/>{t('respD')}
                             </span>
                        </ViewContent>
                        <ViewContent setIsVisible={setVUl} time={250}>
                            <ul className="list-group list-group-flush mt-2">
                                {element?.resp.map((e, index) => {
                                    const [beforeColon, afterColon] = e[lang].split(':');
                                    return (
                                        <ViewDesc key={index} index={index} strong={beforeColon} isVisible={vUl} text={afterColon}/>
                                    )
                                })}
                            </ul>
                        </ViewContent>
                    </div>
                    <div className="w-100 d-flex justify-content-center mt-2">
                        <button onClick={()=>setHideModal(false)} className="btn-content px-4 py-2 fw-bold btn rounded-3 btn-info text-white " style={{letterSpacing: '0.07rem', fontSize: '1.2rem'}}>{t('contDetail')} {parent?.title[lang].split('/')[0]}</button>
                    </div>
                </div>
                <ViewContent className={`${maxWidth ? 'd-none' : `col-5 ${vDevis ? 'arrow-div-left' : 'invisible'}`} ps-0 pe-1 m-0 d-flex align-items-center`} time={250} setIsVisible={setVDevis}>
                    <Devis t={t} objectTitle={parent?.title[lang].split('/')[0]}/>
                </ViewContent>
                <div className="mt-3 w-100 d-inline-flex justify-content-evenly bg-dark-subtle py-4">
                    {parent?.children.slice((idActive - 1)*paginate,(idActive*paginate)).map((e)=>(
                        <div key={e.id} className="text-center flex-grow-1 w-20">
                            <a href={`/${lang}/service/${parent.id}/${e.id}`}>{e.title[lang]}</a>
                        </div>
                    ))}
                </div>
                <Pagination length={len} active={idActive} setActive={setActive}/>
            </div>
            <ShowModalDevis t={t} title={parent?.title[lang].split('/')[0]} show={clickModal} onHide={()=>setHideModal(true)}/>
        </>
    )
}

export default CompDetail