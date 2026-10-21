import React, {useCallback, useState} from "react";
import IconFooter from "./IconFooter";
import logo from "../../Asset/icon.png";
import logoYour from '../../Asset/YourAndOur.png'
import {useTranslation} from "react-i18next";
import { useParams} from "react-router-dom";
import {FaArrowRight, FaEnvelope, FaLocationDot, FaLinkedinIn, FaPhone, FaWhatsapp, FaFacebookF} from "react-icons/fa6";
import {IoMdCheckmark} from "react-icons/io";
import Newsletter from "../../Model/Newsletter.ts";
import ViewContent from "../../FunctionComponent/ViewContent";
import './FooterModern.css'

const AccueilFooter = () => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${'contact@aris-cc.com'}`;
        window.open(mailtoUrl, '_blank');
    },[])
    const [isIconVisible, setIsIconVisible] = useState(false);
    const { t } = useTranslation();
    const {lang}=useParams()

    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')

    const submitNewsletter = useCallback((e) => {
        e.preventDefault()
        if (!email.trim() || status === 'loading') return
        setStatus('loading')
        Newsletter.sendDataToAdmin('Newsletter', email.trim())
            .then((ok) => {
                setStatus(ok ? 'success' : 'error')
                if (ok) setEmail('')
            })
            .catch(() => setStatus('error'))
    }, [email, status])

    const contactItems = [
        {icon: FaLocationDot, label: 'Iavoloha, Antananarivo 102', href: 'https://maps.app.goo.gl/5hp5qcinzUmxCbaj8', color: 'footer-ic-pink'},
        {icon: FaPhone, label: '+261 38 12 379 96', href: 'https://wa.me/+261381237996', color: 'footer-ic-blue'},
        {icon: FaEnvelope, label: 'contact@aris-cc.com', href: 'mailto:contact@aris-cc.com', color: 'footer-ic-cyan', onClick: handleClick},
    ]

    const socials = [
        {icon: FaFacebookF, href: 'https://www.facebook.com', label: 'Facebook', color: 'social-facebook'},
        {icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/aris-concept-company-567703240', label: 'LinkedIn', color: 'social-linkedin'},
        {icon: FaWhatsapp, href: 'https://wa.me/+261381237996', label: 'WhatsApp', color: 'social-whatsapp'},
        {icon: FaPhone, href: 'tel:+261381237996', label: 'Téléphone', color: 'social-phone'},
    ]

    const expertiseLinks = [
        {key: 'dna', href: `/${lang}/#adn`, external: true},
        {key: 'info', href: `/${lang}/service#info`},
        {key: 'marketing', href: `/${lang}/service#web-marketing`},
        {key: 'compta', href: `/${lang}/service#accounting`},
        {key: 'ext', href: `/${lang}/service#ext`},
        {key: 'rh', href: `/${lang}/service#hr`},
    ]

    return (
        <>
            <IconFooter isVisible={!isIconVisible}/>
            <ViewContent className="m-0 p-0 w-100" time={200} setIsVisible={setIsIconVisible}>
            <footer className="footer-modern">
                <div className="footer-wave" aria-hidden="true"/>
                <div className="container-fluid px-lg-5 px-md-3 px-3">
                    <div className="row gy-4 mx-0 pt-5">

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="d-inline-flex align-items-center mb-3">
                                <img src={logo} alt="Aris Concept" width={40} className="me-2"/>
                                <h4 className="mb-0 fs-3 fw-bold">
                                    <span className="brand-aris">Aris </span><span className="brand-concept">Concept</span>
                                </h4>
                            </div>
                            <p className="footer-desc">{t('descFooter')}</p>
                            <h5 className="footer-title-sm mt-4 mb-3">{t('ctnUs')}</h5>
                            <ul className="footer-contact list-unstyled mb-0">
                                {contactItems.map(({icon: Icon, label, href, color, onClick}) => (
                                    <li key={label} className="mb-2">
                                        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                                            <span className={`footer-contact-ic ${color}`}><Icon size={15}/></span>
                                            <span>{label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <h5 className="footer-title mb-3">{t('domaine')}</h5>
                            <ul className="footer-links list-unstyled mb-0">
                                {expertiseLinks.map(({key, href, external}) => (
                                    <li key={key} className="mb-1">
                                        <a href={href} className="footer-link">
                                            {t(key)}
                                            {external && <FaArrowRight className="footer-link-arrow" size={10}/>}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="footer-socials mt-4 d-flex gap-2">
                                {socials.map(({icon: Icon, href, label, color}) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`footer-social ${color}`}>
                                        <Icon size={15}/>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="d-flex align-items-start justify-content-between flex-wrap gap-2">
                                <div>
                                    <h5 className="footer-title mb-2">Newsletter</h5>
                                    <p className="footer-desc mb-0">{t('inscrire')}</p>
                                </div>
                                <img src={logoYour} decoding={"async"} height={90} draggable={"false"} alt="" className="footer-badge-img"/>
                            </div>

                            <form className="footer-newsletter mt-3" onSubmit={submitNewsletter} autoComplete="off">
                                <span className="footer-newsletter-ic"><FaEnvelope size={15}/></span>
                                <input
                                    type="email"
                                    className="footer-newsletter-input"
                                    placeholder="votre@email.com"
                                    aria-label="e-mail"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="footer-newsletter-btn" aria-label="S'inscrire" disabled={status==='loading'}>
                                    {status === 'success' ? <IoMdCheckmark size={18}/> : <FaArrowRight size={14}/>}
                                </button>
                            </form>
                            {status === 'success' && <p className="footer-newsletter-msg success">{t('sucMes')}</p>}
                            {status === 'error' && <p className="footer-newsletter-msg error">{t('probConnex')}</p>}

                            <div className="d-flex align-items-center gap-2 mt-4 pt-2">
                                <div className="footer-line flex-grow-1"/>
                                <span className="footer-join">{t('join')}</span>
                                <div className="footer-line flex-grow-1"/>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom mt-4 py-3 d-flex flex-wrap justify-content-between align-items-center gap-2">
                        <span>© {new Date().getFullYear()} Aris Concept — {t('droit')}</span>
                        <div className="d-flex flex-wrap gap-3">
                            <span className="footer-legal cursor-pointer">{t('mention')}</span>
                            <span className="footer-legal cursor-pointer">{t('politique')}</span>
                        </div>
                    </div>
                </div>
            </footer>
            </ViewContent>
        </>
    )
}
export default AccueilFooter
