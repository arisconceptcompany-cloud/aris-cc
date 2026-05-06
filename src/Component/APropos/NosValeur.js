import React, {useState} from "react";
import integite from '../../Asset/intergrite.jpg'
import excellent from '../../Asset/exelent.jpg'
import eng from '../../Asset/engagementClient.jpg'
import giv from '../../Asset/giveJob.jpg'
import {useMediaQuery} from "react-responsive";
import ValeurE from "./ValeurE";
import {useTranslation} from "react-i18next";
import ViewContent from "../../FunctionComponent/ViewContent";
const NosValeur = () => {
    const wMin=useMediaQuery({query: "(max-width: 768px)"})
    const {t} = useTranslation()

    const [viewList, setViewList] = useState(false);
    const [viewSpan, setViewSpan] = useState(false);
    const [viewP, setViewP] = useState(false);
    return (
        <>
            <div className="mx-0 mb-2 mt-3 w-100 p-3">
                <div className={`${wMin ? 'w-100 p-0 m-0' : 'container'}`}>
                    <ViewContent className="row p-0 m-0 border-aris" setIsVisible={setViewSpan} time={100}>
                        <span className={`display-6 text-aris title width-max ${viewSpan ? 'showTop' : 'invisible'}`}>{t('valeur')}</span>
                    </ViewContent>
                   <ViewContent className="row mx-0 mt-3 mb-2 p-0" setIsVisible={setViewP} time={150}>
                       <p className={`fs-5 mb-0 ${viewP ? 'showTop' : 'invisible'}`}>{t('p1Valeur')}</p>
                   </ViewContent>
                    <ViewContent time={150} setIsVisible={setViewList}>
                        <ValeurE isVisible={viewList} emplacement={0} ind={0} text={t('inTP')} img={integite} title={t('inT')}/>
                        <ValeurE isVisible={viewList} emplacement={1} ind={5} text={t('exP')} img={excellent} title={'Excellence'}/>
                        <ValeurE isVisible={viewList} emplacement={2} ind={8} text={t('eng')} img={eng} title={t('engT')}/>
                        <ValeurE isVisible={viewList} emplacement={3} ind={11} text={t('respT')} img={giv} title={t('respP')}/>
                    </ViewContent>
                </div>
            </div>
        </>
    )
}
export default NosValeur