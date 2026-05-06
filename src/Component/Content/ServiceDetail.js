import React, {useCallback, useEffect, useMemo, useState} from "react";
import wave from "../../Asset/bg.svg";
import wave2 from "../../Asset/wave (4).svg";
import compta from "../../Asset/comptable.png"
import web from "../../Asset/traitement.png"
import rh from "../../Asset/ressources humaines.png"
import mark from "../../Asset/Web et Marketing.png"
import ext from "../../Asset/image.png"
import CardServiceContent from "./CardServiceContent";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import ViewContent from "../../FunctionComponent/ViewContent";


const ServiceDetail= ()=>{
    const [date,setDate]=useState(new Date())
    const { t, i18n } = useTranslation();
    const navigate=useNavigate()
    const {lang}=useParams()

    const wMax = useMediaQuery({ query: "(max-width: 1000px)" });
    const minW = useMediaQuery({query: "(max-width: 500px)"})

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
                <div className={`col-6 h-50 pb-2 ${i%2===0 ? 'ps-1 pe-0' : 'ps-0 pe-1'}`} key={i} >
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
        <>
            <div className="mx-0 mt-0 mb-2 p-0 w-100 position-relative" style={{backgroundImage: `url('${wave}')`,backgroundSize: 'cover',backgroundPosition: 'center', minHeight: '100vh'}}>
                <img src={wave2} decoding={"async"} className="position-absolute start-0 w-100 m-0 p-0 top-0 z-0" alt={"wave2"}/>
                <ViewContent time={250} setIsVisible={setH2View}>
                    <h2 className={`${wMax ? 'text-center pt-3 px-0 mb-3' : 'ms-4 p-5'} fs-1 fw-bold text-concept z-2 position-relative ${h2View ? 'showTop' : 'invisible'}`}>
                        {t('dom')}
                    </h2>
                </ViewContent>
                <div className={`row mx-0 mb-2 mt-2 ${minW ? 'p-0' : 'p-2'} w-100 z-1 position-relative`}>
                    <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className={`${wMax? "col-12": "col-6"}`}>
                        <ViewContent time={0} setIsVisible={setCurrentView} className={`card shadow-lg rounded-2 border-0 h-100 d-flex justify-content-center scaleContentCard ${currentView ? 'slideOutToRight' : 'invisible'}`}>
                            <img src={carDefaultClicked.img} decoding={"async"} className="mx-auto mt-2" height={minW ? 150 : 300}  alt={carDefaultClicked.text}/>
                            <div className="card-title text-center mt-3">
                                <h4 className="fs-3 fw-bold text-aris text-uppercase">{carDefaultClicked.text}</h4>
                            </div>
                            <div className="card-footer mb-2 border-0 bg-transparent">
                                <p className="mt-2 text-dark mx-2 mb-0 fs-5">
                                    {carDefaultClicked.content}
                                </p>
                                <div className="w-100 d-flex justify-content-end">
                                    <button onClick={()=>navigate(`/${lang}/service#${carDefaultClicked.div}`)} type="button" className="btn btn-content bg-aris text-white fw-bold py-2 rounded-1 btnIcon">{t('plus')}</button>
                                </div>
                            </div>
                        </ViewContent>
                    </div>
                    <div className={`${wMax ? 'col-12 mt-3': 'col-6 m-0 p-0 my-auto'}`}>
                        <div className="row m-0 p-0 w-100 d-flex h-100 align-items-stretch" >
                            {afficheCarousel}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceDetail