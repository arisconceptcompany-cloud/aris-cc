import React, {useMemo, useState} from "react";
import wave from "../../Asset/wave.svg";
import wave2 from "../../Asset/waveHead.svg";
import {Form, Dropdown} from "react-bootstrap";
import {JobData} from "../../Config/Job";
import {useNavigate, useParams} from "react-router-dom";
import Superposed from "../Accueil/Superposed";
import Pagination from "../Body/Pagination";
import {useMediaQuery} from "react-responsive";
import {useTranslation} from "react-i18next";
import ViewContent from "../../FunctionComponent/ViewContent";
import LiElement from "./LiElement";

const ListMetier = () => {
    const navigate=useNavigate()
    const { lang } = useParams()
    const allJobDetails=useMemo(()=>{
        return JobData.flatMap(e =>
            e.children.map(child => ({
                ...child,
                parentId: e.id,
                parentTitle: e.title
            })))
    },[])
    const [active,setActive]=useState(1)
    const len=useMemo(()=>{
        const am=allJobDetails.length%18
        if(am===0){
            return allJobDetails.length/18
        }else{
            return Math.floor((allJobDetails.length/18)+1)
        }
    },[allJobDetails])
    const wMax = useMediaQuery({ query: "(max-width: 855px) and (min-width: 447px)" });
    const min = useMediaQuery({ query: "(max-width: 446px)" });
    const wMaxText = useMediaQuery({ query: "(max-width: 655px)" });
    const contentMax = useMediaQuery({ query: "(max-width: 923px)" });
    const { t } = useTranslation();
    const [h2View,setH2View]=useState(false)
    const [spView,setSpView]=useState(false)
    const [adnView,setAdnView]=useState(false)
    const [listView,setListView]=useState(false)
    const [search, setSearch] = useState('')
    const [activeIndex, setActiveIndex] = useState(1);
    const filter = useMemo(()=>{
        if (search){
            return allJobDetails.filter((job)=>
                job.parentTitle[lang].toLowerCase().includes(search.toLowerCase()) ||
                job.title[lang].toLowerCase().includes(search.toLowerCase())
            )
        }
        return []
    },[search,allJobDetails,lang])
    const length = useMemo(()=>{
        return filter.length % 10 === 0 ? filter.length / 10 : Math.floor(filter.length / 10) + 1;
    },[filter])
    return(
        <>
            <div id="adn" className="m-0 p-0 w-100 position-relative d-flex border-0" style={{backgroundImage: `url('${wave}')`,backgroundSize: 'cover',backgroundPosition: 'center', width:'100%', minHeight: '100vh'}}>
                <img src={wave2} className="position-absolute w-100 m-0 p-0 top-0 z-0 border-0" draggable={"false"} decoding={"async"} alt="wave"/>
                <div className="p-3 z-1 mt-2 w-100">
                    <div className={`${wMaxText ? 'my-1': 'my-4 p-2'} w-100 `}>
                        <ViewContent setIsVisible={setH2View} time={150}>
                            <h2 className={`display-6 ${wMaxText ? 'text-center' : 'ms-5'} fw-bold text-white ${h2View ? 'showTop' : 'invisible'}`}>{t('cle')}.</h2>
                        </ViewContent>
                        {contentMax &&(
                            <ViewContent setIsVisible={setSpView} time={150}>
                                <div className="w-100 text-white mb-2">
                                    <span className={`small ${spView ? 'slideOutToRight' : 'invisible'}`} style={{letterSpacing: '0.075rem'}}>{t('delegue')}</span>
                                </div>
                            </ViewContent>
                        )}
                    </div>
                    <ViewContent setIsVisible={setAdnView} time={250}>
                        <div className="w-100 border-aris text-start p-0 m-0 d-flex justify-content-between h-auto">
                            <h4 className={`p-0 m-0 text-aris title pb-3 fw-bold ${adnView ? 'showTop' : 'invisible'}`}>{t('dna')}</h4>
                            <div className={`${adnView ? 'rotate' : 'invisible'} h-100 ${wMax ? 'w-50': min ? 'ms-4 flex-grow-1':'w-25'}`}>
                                <Form.Control
                                    type="search"
                                    aria-describedby="searchBlock"
                                    aria-label={"service"}
                                    placeholder={t('recherche')}
                                    autoComplete="off"
                                    value={search}
                                    onChange={(e)=>setSearch(e.target.value)}
                                    style={{ border: '1px solid blue'}}
                                />
                            </div>
                        </div>
                    </ViewContent>
                    <Dropdown className="w-100 d-flex justify-content-end z-3" show={search.trim().length !==0}>
                        <Dropdown.Menu className={`${contentMax ? 'w-100' : 'w-50-rem'} mt-1 shadow-lg m-0 pt-1 pb-0 px-1`}>
                            <ul className="custom-list">
                                {filter.slice((activeIndex - 1)*10,(activeIndex*10)).map((e,index)=>(
                                    <li key={index} onClick={()=>navigate(`/${lang}/service/${e.parentId}/${e.id}`)} className={`cursor-pointer scale bg-cyan py-2`}><span> <i className="far fa-dot-circle text-aris me-1"/>{e.title[lang]}</span></li>
                                ))}
                            </ul>
                            <Pagination length={length } active={activeIndex} setActive={setActiveIndex}/>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="mt-3 w-100">
                        <div className="row w-100 m-0 p-0">
                            <ViewContent className={`${spView ? 'arrow-div' : 'invisible'} ${contentMax? 'col-12 mb-3' : 'col-4'} position-relative d-flex justify-content-center align-items-center`} setIsVisible={setSpView} time={350}>
                                <Superposed t={t} large={contentMax}/>
                            </ViewContent>
                            <ViewContent setIsVisible={setListView} time={250} className={`${contentMax ? "col-12" : "col-8"}`}>
                                <ul className="custom-list">
                                    {allJobDetails.slice((active-1)*18,(active*18)).map((jobDetail,index)=>(
                                        <LiElement isVisible={listView} index={index} key={`${jobDetail.parentId}-${jobDetail.id}`} jobDetail={jobDetail} lang={lang}/>
                                    ))}
                                </ul>
                                <div className="w-100 p-2">
                                    <Pagination length={len} active={active} setActive={setActive}/>
                                </div>
                            </ViewContent>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="position-absolute bottom-0 w-100 start-0" viewBox="0 0 1440 320"><path fill="#d0d0d0" fillOpacity="0.2" d="M0,0L26.7,32C53.3,64,107,128,160,165.3C213.3,203,267,213,320,197.3C373.3,181,427,139,480,112C533.3,85,587,75,640,74.7C693.3,75,747,85,800,80C853.3,75,907,53,960,48C1013.3,43,1067,53,1120,48C1173.3,43,1227,21,1280,16C1333.3,11,1387,21,1413,26.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"/></svg>
            </div>
        </>
    )
}

export default ListMetier