import React, {useCallback, useEffect, useMemo, useState} from "react";

import fr from '../../Asset/france.png'
import usa from '../../Asset/anglais.png'
import logo from '../../Asset/icon.png'
import {Dropdown, Modal} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Annimate.css'
import {useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

const HeaderContent=({active})=>{
    const [idActive]=useState(active)
    const [hasShadow, setHasShadow] = useState(false);
    useEffect(() => {
        const handleScroll = () => setHasShadow(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()
    const { lang } = useParams()

    const changeLanguage = useCallback((langage) => {
        const newPath = `/${langage}${location.pathname.replace(/\/(fr|en)/, '')}`;
        navigate(newPath);
    },[location, navigate])

    useEffect(()=>{
        if (lang && ['fr', 'en'].includes(lang)) {
            i18n.changeLanguage(lang);
        }
    },[location, lang, i18n])
    const currentIconLanguage=useMemo(()=>{
        if (i18n.language==='fr'){
            return fr
        }
        return usa
    },[i18n.language])

    const wMax = useMediaQuery({ query: "(max-width: 1120px)" });
    const [showLink,setShowLink]=useState(false)
    return (
        <>
            {wMax ? (
                <>
                    <nav id="header" className={`navbar navbar-light position-fixed top-0 start-0 w-100 z-3 ${hasShadow ? 'bg-light shadow-lg': 'bg-transparent'}`}>
                        <div className="container-fluid">
                            <Link to={`/${lang}/`} className="text-decoration-none text-dark">
                                <img src={logo} alt="Aris Concept" width="35" className="d-inline-block align-text-top me-2"/>
                                <strong className="text-aris me-2">Aris</strong><strong className="text-concept">Concept</strong>
                            </Link>
                            <i onClick={()=>setShowLink(true)} className={`fa-solid fa-bars fa-2x cursor-pointer ${hasShadow ? '' : 'text-white'}`}/>
                        </div>
                    </nav>
                    <Modal show={showLink} onHide={() => setShowLink(false)} backdropClassName="p-0 m-0" dialogClassName="min-vw-100 border-0 p-0 m-0" contentClassName="rounded-0 border-0 w-100">
                        <Modal.Header className="m-0" closeButton>
                            <Dropdown>
                                <Dropdown.Toggle
                                    as="span"
                                    id="lang"
                                    className={`cursor-pointer fs-6 px-2 rounded-0 text-dark fw-bold`}
                                >
                                    <img src={currentIconLanguage} alt={"currentLanguage"} width={25} className="me-2"/><i className="ms-2 fa-solid fa-angle-down"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="mt-3">
                                    <Dropdown.Item onClick={()=>changeLanguage('fr')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                        <img src={fr} alt={"fr"} width={20} className="me-2 "/>{t('fr')}
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>changeLanguage('en')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                        <img src={usa} alt={"en"} width={20} className="me-2 "/>{t('en')}
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Modal.Header>
                        <Modal.Body className="p-0 m-0">
                            <div className="w-100 m-0 p-2">
                                <ul className="list-group list-group-flush">
                                    <li className={`list-group-item btn-content ${active===1 ? 'border-aris' : ''}`}>
                                <Link to={`/${lang}/`} className={`text-decoration-none ${active===1 ? 'text-aris fw-bold': 'text-dark'}`} style={{fontSize: '1.5rem'}}>{t('ac')}</Link>
                                    </li>
                                    <li className={`list-group-item btn-content ${active===3 ? 'border-aris' : ''}`}>
                                        <Link to={`/${lang}/apropos`} className={`text-decoration-none ${active===3 ? 'text-aris fw-bold': 'text-dark'}`} style={{fontSize: '1.5rem'}}>{t("apropos")}</Link>
                                    </li>
                                    <li className={`list-group-item btn-content ${active===2 ? 'border-aris' : ''}`}>
                                        <Link to={`/${lang}/service`} className={`text-decoration-none ${active===2 ? 'text-aris fw-bold': 'text-dark'}`} style={{fontSize: '1.5rem'}}>{t('service')}</Link>
                                    </li>
                                    <li className={`list-group-item btn-content ${active===5 ? 'border-aris' : ''}`}>
                                        <Link to={`/${lang}/avantages`} className={`text-decoration-none ${active===5 ? 'text-aris fw-bold': 'text-dark'}`} style={{fontSize: '1.5rem'}}>{t('avantage')}</Link>
                                    </li>
                                    <li className={`list-group-item btn-content ${active===4 ? 'border-aris' : ''}`}>
                                        <Link to={`/${lang}/contact`} className={`text-decoration-none ${active===4 ? 'text-aris fw-bold': 'text-dark'}`} style={{fontSize: '1.5rem'}}>{t('contact')}</Link>
                                    </li>
                                    <li className={`list-group-item btn-content ${active===6 ? 'border-aris' : ''}`}>
                                        <Link to={`/${lang}/carrier`} className={`text-decoration-none ${active===6 ? 'text-aris fw-bold': 'text-dark'}`} style={{fontSize: '1.5rem'}}>{t('post')}</Link>
                                    </li>
                                </ul>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            ): (
                <div id="header" className={`position-fixed top-0 start-0 w-100 pt-2 px-3 pb-0 z-3 d-flex justify-content-between text-white text-opacity-75 fw-bold ${hasShadow ? ' bg-white shadow' : ''}`}  style={{ transition: 'background-color 700ms ease-in-out' }}>
                    {hasShadow ? (
                        <>
                            <div className="flex-grow-1 d-inline-flex ms-3">
                                <img onClick={()=>navigate(`/${lang}/`)} src={logo} alt="Aris Concept" className="logo-icon img-fluid me-3 cursor-pointer"/>
                                <h4 onClick={()=>navigate(`/${lang}/`)} className="mb-0 fs-4 cursor-pointer fw-bold">
                                    <strong style={{ color: '#D10D58' }}>Aris </strong> <strong style={{ color: '#0e8de8' }}>Concept</strong>
                                </h4>
                            </div>
                            <div className="d-flex justify-content-between text-white text-opacity-75 fw-bold">
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <Link to={`/${lang}/`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===1 ? 'btn-active' : ''} text-dark fw-bold`} >{t('ac')}</Link>
                                </div>
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <Link to={`/${lang}/apropos`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===3 ? 'btn-active' : ''} text-dark fw-bold`} >{t("apropos")}</Link>
                                </div>
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <Link to={`/${lang}/service`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===2 ? 'btn-active' : ''} text-dark fw-bold`} ><span className="p-2">{t('service')}</span></Link>
                                </div>
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <Link to={`/${lang}/avantages`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===5 ? 'btn-active' : ''} text-dark fw-bold`}>{t('avantage')}</Link>
                                </div>
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <Link to={`/${lang}/contact`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===4 ? 'btn-active' : ''} text-dark fw-bold`}>{t('contact')}</Link>
                                </div>
                                <div className="me-2 px-2 d-flex align-items-center mx-2 btn-animate">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            as="span"
                                            id="lang"
                                            className={`cursor-pointer fs-6 px-2 rounded-0 text-dark fw-bold`}
                                        >
                                            <img src={currentIconLanguage} alt={"currentLanguage"} width={20} className="me-2 "/><i className="ms-2 fa-solid fa-angle-down"/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="mt-3">
                                            <Dropdown.Item onClick={()=>changeLanguage('fr')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                                <img src={fr} alt={"fr"} width={20} className="me-2 "/>{t('fr')}
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={()=>changeLanguage('en')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                                <img src={usa} alt={"en"} width={20} className="me-2 "/>{t('en')}
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="bg-danger h-75 my-auto border-start"/>
                                <div className={`me-2 ps-2 btn-animate`}>
                                    <Link to={`/${lang}/carrier`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===6 ? 'btn-active' : ''} text-dark fw-bold`}><span className="p-2">{t('post')}</span></Link>
                                </div>
                            </div>
                        </>
                    ): (
                        <>
                            <div id="header" className="d-flex justify-content-between text-white text-opacity-75 fw-bold">
                                <div className={`me-2 btn-animate`}>
                                    <Link to={`/${lang}/`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===1 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`} >{t('ac')}</Link>
                                </div>
                                <div className={`me-2 btn-animate`}>
                                    <Link to={`/${lang}/service`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===2 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`} ><span className="p-2">{t('service')}</span></Link>
                                </div>
                                <div className={`me-2 btn-animate`}>
                                    <Link to={`/${lang}/avantages`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===5 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`} >{t('avantage')}</Link>
                                </div>
                                <div className={`me-2 btn-animate`}>
                                    <Link to={`/${lang}/contact`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===4 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`}>{t('contact')}</Link>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-end">
                                <div className={`me-2 btn-animate2 px-2`}>
                                    <Link to={`/${lang}/apropos`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===3 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`}>{t('apropos')}</Link>
                                </div>
                                <div className="bg-danger h-75 my-auto border-start"/>
                                <div className="me-2 btn-animate2 px-2 my-auto d-flex align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            as="span"
                                            id="lang"
                                            className={`cursor-pointer py-1 fs-6 px-2 rounded-0 text-white text-opacity-75 fw-bold`}
                                        >
                                            <img src={currentIconLanguage} alt={"currentLanguage"} width={20} className="me-2 "/><i className="ms-2 fa-solid fa-angle-down"/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="">
                                            <Dropdown.Item onClick={()=>changeLanguage('fr')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                                <img src={fr} alt={"fr"} width={20} className="me-2 "/>{t('fr')}
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={()=>changeLanguage('en')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                                <img src={usa} alt={"en"} width={20} className="me-2 "/>{t('en')}
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="bg-danger h-75 my-auto border-start"/>
                                <div className={`me-2 btn-animate2 px-2`}>
                                    <Link to={`/${lang}/carrier`} className={`btn btn-header py-1 rounded-0 fs-6 ps-2 ${idActive===6 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`} ><span className="p-2">{t('post')}</span></Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default HeaderContent