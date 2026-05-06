import React, {useState} from "react";
import './apropos.css'
import equipe from '../../Asset/Equipe.png'
import {useMediaQuery} from "react-responsive";
import {useTranslation} from "react-i18next";
import ViewContent from "../../FunctionComponent/ViewContent";
import StepLi from "../../FunctionComponent/StepLi";

const QuiSommeNous = () => {
    const wMin=useMediaQuery({query: "(max-width: 1156px)"})
    const {t}=useTranslation()
    const [visible,setVisible]=useState(false)
    const [visibleSpan,setSpanVisible]=useState(false)
    const [visibleHeader,setHeaderVisible]=useState(false)
    const [visibleP1,setP1Visible]=useState(false)
    const [visibleP2,setP2Visible]=useState(false)
    const [visibleP3,setP3Visible]=useState(false)
    return (
        <>
            <div className="w-100 m-0 p-0">
                <div className="px-lg-5 px-md-1">
                    <div className="row m-0 p-0 w-100">
                        {wMin && (
                            <div className="col-12 m-0 p-0">
                                <img src={equipe} draggable={"false"} decoding={"async"} className="w-100 z-0 rounded-2" alt="img-equipe" style={{transform: 'translateY(-1.55rem)'}}/>
                            </div>
                        )}
                        <div className={`${wMin ? 'col-12' : 'col-6'}`}>
                            <ViewContent className="mt-2" time={200} setIsVisible={setVisible}>
                                <StepLi isVisible={visible} index={0} setTurnOn={setSpanVisible}>
                                    <span className={`text-concept d-inline-block display-6 fw-bold text-uppercase ${visibleSpan ? 'showTop' : 'invisible'}`}>{t('apropos')}</span>
                                </StepLi>
                                <StepLi isVisible={visible} index={2} setTurnOn={setHeaderVisible}>
                                    <p className={`mt-4 ${visibleHeader ? 'arrow-div' : 'invisible'}`}><span className="fw-bold text-aris">ARIS</span> <span className="fw-bold text-concept"> CONCEPT</span>  {t('introAris')}</p>
                                </StepLi>
                                <StepLi isVisible={visible} index={4} setTurnOn={setP1Visible}>
                                    <p className={`${visibleP1 ? 'arrow-div' : 'invisible'}`}>{t('p1')}</p>
                                </StepLi>
                                <StepLi isVisible={visible} index={6} setTurnOn={setP2Visible}>
                                    <p className={`${visibleP2 ? 'arrow-div' : 'invisible'}`}>{t('p2')}</p>
                                </StepLi>
                                <StepLi isVisible={visible} index={8} setTurnOn={setP3Visible}>
                                    <p className={`${visibleP3 ? 'arrow-div' : 'invisible'}`}>{t('p3')}</p>
                                </StepLi>
                            </ViewContent>
                        </div>
                        <div className={`${wMin ? 'd-none' : `col-6 d-flex align-items-center ${visible ? 'arrow-div-left' : 'invisible'}`}`}>
                            <div className="w-100 position-relative" style={{height: '400px'}}>
                                <img src={equipe} draggable={"false"} decoding={"async"} className="position-absolute z-2 w-100 top-0 start-0 rounded-3"  alt="img-equipe"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuiSommeNous