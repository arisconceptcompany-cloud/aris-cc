import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

import fr from '../../Asset/france.png'
import usa from '../../Asset/anglais.png'
import logo from '../../Asset/icon.png'
import {Dropdown, Modal} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {FaBars, FaChevronDown, FaXmark} from "react-icons/fa6";
import './Navbar.css'

const HeaderContent = ({active}) => {
    const [idActive] = useState(active)
    const [scrolled, setScrolled] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    const progressRef = useRef(null);

    useEffect(() => {
        let frame = null;
        const handleScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                setScrolled(window.scrollY > 20);
                const doc = document.documentElement;
                const max = doc.scrollHeight - window.innerHeight;
                const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
                if (progressRef.current) {
                    progressRef.current.style.width = `${ratio * 100}%`;
                }
                frame = null;
            });
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (frame) cancelAnimationFrame(frame);
        };
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

    const currentIconLanguage = useMemo(()=>{
        if (i18n.language==='fr'){
            return fr
        }
        return usa
    },[i18n.language])

    const isMobile = useMediaQuery({ query: "(max-width: 1120px)" });

    const links = useMemo(() => ([
        {id: 1, to: `/${lang}/`, label: t('ac')},
        {id: 3, to: `/${lang}/apropos`, label: t('apropos')},
        {id: 2, to: `/${lang}/service`, label: t('service')},
        {id: 5, to: `/${lang}/avantages`, label: t('avantage')},
        {id: 4, to: `/${lang}/contact`, label: t('contact')},
    ]), [lang, t])

    const languageMenu = (
        <Dropdown.Menu className="lang-menu mt-2 border-0 shadow-sm">
            <Dropdown.Item onClick={()=>changeLanguage('fr')} as={"div"} className={`d-inline-flex cursor-pointer text-uppercase align-items-center ${i18n.language==='fr' ? 'active-lang' : ''}`}>
                <img src={fr} alt={"fr"} width={20} className="me-2"/>{t('fr')}
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>changeLanguage('en')} as={"div"} className={`d-inline-flex cursor-pointer text-uppercase align-items-center ${i18n.language==='en' ? 'active-lang' : ''}`}>
                <img src={usa} alt={"en"} width={20} className="me-2"/>{t('en')}
            </Dropdown.Item>
        </Dropdown.Menu>
    )

    return (
        <>
            <header id="header" className={`navbar-aris ${scrolled ? 'navbar-solid' : 'navbar-over'} ${isMobile ? 'is-mobile' : ''}`}>
                <Link to={`/${lang}/`} className="navbar-brand-link d-inline-flex align-items-center text-decoration-none">
                    <span className="brand-mark">
                        <img src={logo} alt="Aris Concept" width="30" className="brand-logo"/>
                    </span>
                    <strong className="brand-name"><span className="brand-aris">Aris</span> <span className="brand-concept">Concept</span></strong>
                </Link>

                {!isMobile && (
                    <nav className="navbar-links d-flex align-items-center">
                        {links.map(({id, to, label}) => (
                            <Link key={id} to={to} className={`navbar-link ${idActive===id ? 'is-active' : ''}`}>
                                {label}
                                <span className="navbar-link-bar" aria-hidden="true"/>
                            </Link>
                        ))}

                        <Dropdown className="d-inline-flex align-items-center">
                            <Dropdown.Toggle as="span" id="lang" className="navbar-lang cursor-pointer d-inline-flex align-items-center">
                                <img src={currentIconLanguage} alt={"currentLanguage"} width={20}/>
                                <FaChevronDown className="lang-chevron" size={11}/>
                            </Dropdown.Toggle>
                            {languageMenu}
                        </Dropdown>

                        <Link to={`/${lang}/carrier`} className={`navbar-cta ${idActive===6 ? 'is-active' : ''}`}>
                            {t('post')}
                            <span className="navbar-cta-shine" aria-hidden="true"/>
                        </Link>
                    </nav>
                )}

                {isMobile && (
                    <button type="button" className="navbar-burger" aria-label="Menu" onClick={()=>setOpenMobile(true)}>
                        <FaBars size={22}/>
                    </button>
                )}

                <div className="navbar-progress" aria-hidden="true"><span ref={progressRef}/></div>
            </header>

            <Modal show={openMobile} onHide={() => setOpenMobile(false)} fullscreen className="mobile-menu-modal">
                <div className="mobile-menu-head d-flex align-items-center justify-content-between px-3 py-3">
                    <Link to={`/${lang}/`} className="d-inline-flex align-items-center text-decoration-none" onClick={()=>setOpenMobile(false)}>
                        <img src={logo} alt="Aris Concept" width="32" className="brand-logo"/>
                        <strong className="brand-name"><span className="brand-aris">Aris</span> <span className="brand-concept">Concept</span></strong>
                    </Link>
                    <button type="button" className="navbar-burger" aria-label="Fermer" onClick={()=>setOpenMobile(false)}>
                        <FaXmark size={24}/>
                    </button>
                </div>
                <Modal.Body className="mobile-menu-body px-3">
                    <nav className="d-flex flex-column">
                        {links.map(({id, to, label}) => (
                            <Link key={id} to={to} onClick={()=>setOpenMobile(false)} className={`mobile-menu-link ${idActive===id ? 'is-active' : ''}`}>
                                {label}
                                <span className="mobile-menu-index">{String(id).padStart(2, '0')}</span>
                            </Link>
                        ))}
                        <Link to={`/${lang}/carrier`} onClick={()=>setOpenMobile(false)} className={`mobile-menu-link ${idActive===6 ? 'is-active' : ''}`}>
                            {t('post')}
                            <span className="mobile-menu-index">06</span>
                        </Link>
                    </nav>

                    <div className="mobile-lang mt-4 pt-3">
                        <span className="mobile-lang-label">Langue</span>
                        <div className="d-flex gap-2 mt-2">
                            <button type="button" className={`mobile-lang-btn ${i18n.language==='fr' ? 'is-active' : ''}`} onClick={()=>{changeLanguage('fr'); setOpenMobile(false)}}>
                                <img src={fr} alt={"fr"} width={20}/>{t('fr')}
                            </button>
                            <button type="button" className={`mobile-lang-btn ${i18n.language==='en' ? 'is-active' : ''}`} onClick={()=>{changeLanguage('en'); setOpenMobile(false)}}>
                                <img src={usa} alt={"en"} width={20}/>{t('en')}
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default HeaderContent
