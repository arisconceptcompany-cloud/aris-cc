import React, {useCallback, useEffect, useMemo, useState} from "react";
import compta from "../../Asset/comptable.png"
import web from "../../Asset/traitement.png"
import rh from "../../Asset/ressources humaines.png"
import mark from "../../Asset/Web et Marketing.png"
import ext from "../../Asset/image.png"
import CardServiceContent from "./CardServiceContent";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import ViewContent from "../../FunctionComponent/ViewContent";


const ServiceDetail= ()=>{
    const [date,setDate]=useState(new Date())
    const { t, i18n } = useTranslation();
    const navigate=useNavigate()
    const {lang}=useParams()

    const [h2View,setH2View]=useState(false)
    const [currentView,setCurrentView]=useState(false)

    const services=useMemo(()=>{
        return[
            {id: 1, div: 'web-marketing', bg: 'bg-primary', next: 2, prev: 5, img: mark, text: t('marketing'), content: t('textMarketing')},
            {id: 2, div: 'accounting', bg: 'bg-cyan', next: 3, prev: 1, img: compta, text: t('compta'), content: t('textCompta')},
            {id: 3, div: 'info', bg: 'bg-primary-subtle', next: 4, prev: 2, img: web, text: t('info'), content: t('textInfo')},
            {id: 4, div: 'hr', bg: 'bg-info-subtle', next: 5, prev: 3, img: rh, text: t('rh'), content: t('textRh')},
            {id: 5, div: 'ext', bg: 'bg-blue', next: 1, prev: 4, img: ext, text: t('ext') , content: t('textExt')},
        ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[i18n.language, t])
    const [carDefaultClicked,setClicked]=useState(services[0])
    const [isPaused, setIsPaused] = useState(false);

    useEffect(()=>{
        setClicked((prev)=>services.find((e)=>e.id===prev.id))
    },[services])
    useEffect(() => {
        const updateClickedService = () => {
            setClicked((prevClicked) => {
                return services.find((e) => e.id === prevClicked.next);
            });
            setDate(new Date());
        };

        if (!isPaused) {
            const timer = setTimeout(() => {
                updateClickedService();
            }, 4500);
            return () => clearTimeout(timer);
        }
    }, [isPaused,services, date]);

    const clickDetail = useCallback((id) => {
        setDate(new Date())
        setClicked(services.find((e)=>e.id===id))
    },[services])

    const afficheCarousel = useMemo(() => {
        /* eslint-disable no-loop-func */
        const elements = [];
        let currentId = carDefaultClicked.next;
        let i = 1;

        while (currentId !== carDefaultClicked.id) {
            const servNext = services.find((e) => e.id === currentId);
            if (!servNext) break;
            const dId = servNext.id;
            const du = i;
            const handler = () => clickDetail(dId);
            elements.push(
                <div className="ac-serv-mini-wrap" key={i} >
                    <CardServiceContent element={servNext} id={du} onClicked={handler}/>
                </div>
            );
            i += 1;
            currentId = servNext.next;
        }
        /* eslint-enable no-loop-func */
        return elements;
    }, [carDefaultClicked, services, clickDetail]);

    return (
        <section className="ac-section ac-serv">
            <div className="ac-container">
                <ViewContent time={250} setIsVisible={setH2View}>
                    <div className="ac-head ac-head-center">
                        <h2 className={`ac-heading ${h2View ? 'showTop' : 'invisible'}`}>
                            {t('dom')}
                        </h2>
                        <div className={`ac-underline ac-underline-center ${h2View ? 'showTop' : 'invisible'}`}/>
                    </div>
                </ViewContent>
                <div className="ac-serv-grid">
                    <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="ac-serv-feature-wrap">
                        <ViewContent time={0} setIsVisible={setCurrentView} className={`ac-feature ${currentView ? 'slideOutToRight' : 'invisible'}`}>
                            <div className="ac-feature-media">
                                <img src={carDefaultClicked.img} decoding={"async"} alt={carDefaultClicked.text}/>
                            </div>
                            <div className="ac-feature-body">
                                <h3 className="ac-feature-title">{carDefaultClicked.text}</h3>
                                <p className="ac-feature-text">
                                    {carDefaultClicked.content}
                                </p>
                                <div className="ac-feature-actions">
                                    <button onClick={()=>navigate(`/${lang}/service#${carDefaultClicked.div}`)} type="button" className="ac-btn-accent">{t('plus')}</button>
                                </div>
                            </div>
                        </ViewContent>
                    </div>
                    <div className="ac-serv-minis">
                        {afficheCarousel}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ServiceDetail
