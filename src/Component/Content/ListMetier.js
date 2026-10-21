import React, {useMemo, useState} from "react";
import {Form, Dropdown} from "react-bootstrap";
import {JobData} from "../../Config/Job";
import {useNavigate, useParams} from "react-router-dom";
import Superposed from "../Accueil/Superposed";
import Pagination from "../Body/Pagination";
import {useTranslation} from "react-i18next";
import ViewContent from "../../FunctionComponent/ViewContent";
import LiElement from "./LiElement";
import {FaMagnifyingGlass, FaRegCircleDot} from "react-icons/fa6";

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
        <section id="adn" className="ac-section ac-jobs">
            <div className="ac-container">
                <ViewContent setIsVisible={setH2View} time={150}>
                    <div className="ac-head">
                        <span className={`ac-eyebrow ${h2View ? 'showTop' : 'invisible'}`}>{t('dna')}</span>
                        <h2 className={`ac-heading ${h2View ? 'showTop' : 'invisible'}`}>{t('cle')}</h2>
                        <div className={`ac-underline ${h2View ? 'showTop' : 'invisible'}`}/>
                        <ViewContent setIsVisible={setSpView} time={250}>
                            <p className={`ac-lead ${spView ? 'slideOutToRight' : 'invisible'}`}>{t('delegue')}</p>
                        </ViewContent>
                    </div>
                </ViewContent>
                <div className="ac-jobs-grid">
                    <div className="ac-jobs-visual">
                        <ViewContent className={`${spView ? 'arrow-div' : 'invisible'}`} setIsVisible={setSpView} time={350}>
                            <Superposed t={t}/>
                        </ViewContent>
                    </div>
                    <div className="ac-jobs-panel">
                        <ViewContent setIsVisible={setAdnView} time={250}>
                            <div className={`ac-search ${adnView ? 'showTop' : 'invisible'}`}>
                                <FaMagnifyingGlass className="ac-search-icon" size={15}/>
                                <Form.Control
                                    type="search"
                                    aria-describedby="searchBlock"
                                    aria-label={"service"}
                                    placeholder={t('recherche')}
                                    autoComplete="off"
                                    value={search}
                                    onChange={(e)=>setSearch(e.target.value)}
                                />
                            </div>
                        </ViewContent>
                        <Dropdown className="w-100 d-flex justify-content-end z-3" show={search.trim().length !==0}>
                            <Dropdown.Menu className="shadow-lg m-0 pt-1 pb-0 px-1">
                                <ul className="ac-job-grid ac-job-menu">
                                    {filter.slice((activeIndex - 1)*10,(activeIndex*10)).map((e,index)=>(
                                        <li key={index} onClick={()=>navigate(`/${lang}/service/${e.parentId}/${e.id}`)} className="ac-job-item"><span> <FaRegCircleDot className="ac-job-dot"/>{e.title[lang]}</span></li>
                                    ))}
                                </ul>
                                <Pagination length={length } active={activeIndex} setActive={setActiveIndex}/>
                            </Dropdown.Menu>
                        </Dropdown>
                        <ViewContent setIsVisible={setListView} time={250} className={`ac-jobs-listwrap ${listView ? '' : 'ac-invisible'}`}>
                            <ul className="ac-job-grid">
                                {allJobDetails.slice((active-1)*18,(active*18)).map((jobDetail,index)=>(
                                    <LiElement isVisible={listView} index={index} key={`${jobDetail.parentId}-${jobDetail.id}`} jobDetail={jobDetail} lang={lang}/>
                                ))}
                            </ul>
                            <div className="ac-jobs-pagination">
                                <Pagination length={len} active={active} setActive={setActive}/>
                            </div>
                        </ViewContent>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListMetier
