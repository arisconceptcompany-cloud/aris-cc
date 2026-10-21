import React, {useMemo, useState} from "react";
import {Button, Form, Spinner, Toast} from "react-bootstrap";
import Localisation from "./Contact/Localisation";
import {FormInput, FormSelect, FormTextarea} from "./Contact/FormInput";
import ViewContent from "../FunctionComponent/ViewContent";
import {useTranslation} from "react-i18next";
import {FaLocationDot, FaPhone, FaEnvelope, FaClock} from "react-icons/fa6";
import "./Contact/ContactModern.css";

const ContatctContainer = () => {
    const {t} = useTranslation()
    const elementOption=useMemo(()=>[
        {id:1, name: t('info')},
        {id:2 , name: t('rh')},
        {id:3 , name: t('ext')},
        {id:4 , name: t('marketing')},
        {id:5 , name: t('compta')},
        {id:6 , name: t('other')},
    ] ,[t])

    const handleChange = () => {};

    const [erreur] = useState(false)
    const [showToast,setShowToast]=useState(false)
    const [loading] = useState(false)
    const [validated] = useState(false);
    const [checked,setChecked]=useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [vInfo, setVInfo] = useState(false);

    return(
        <>
            <section className="contact-section">
                <div className="contact-container">
                    <ViewContent time={200} setIsVisible={setIsVisible}>
                        <div className={`contact-card ${isVisible ? 'preAnimation' : 'opacity-0'}`}>
                            <div className="contact-card-head">
                                <h2 className="contact-card-title">{t('formulaireT')}</h2>
                            </div>
                            <Form noValidate validated={validated} className="row" onSubmit={(e)=>null} autoComplete={"off"}>
                                <Form.Group as={"div"} className="mb-3 col-lg-6 col-md-12">
                                    <FormInput id="entreprise" placeholder={t('formEnt')} label={t('company')} />
                                </Form.Group>
                                <Form.Group as={"div"} className="mb-3 col-lg-6 col-md-12">
                                    <FormInput id="site" placeholder={"www.company.com"} label={t('siteCompany')} />
                                </Form.Group>
                                <Form.Group as={"div"} className="mb-3 col-lg-6 col-md-12">
                                    <FormInput id="nom" placeholder={t('enterName')} label={t('nom')} />
                                </Form.Group>
                                <Form.Group as={"div"} className="mb-3 col-lg-6 col-md-12">
                                    <FormInput type={"email"} id={"mail"} label={t('emailEnter')} placeholder={"Email"}/>
                                </Form.Group>
                                <Form.Group as={"div"} className="mb-3 col-lg-12">
                                    <FormSelect id={'besoin'} label={'Service'} onChange={handleChange}>
                                        {elementOption.map(({id,name})=>(
                                            <option key={id} value={id}>{name}</option>
                                        ))}
                                    </FormSelect>
                                </Form.Group>
                                <Form.Group as={"div"} className="mb-3 col-lg-12">
                                    <FormTextarea placeholder={t('bes')} id={'description'} label={t('desc')}/>
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                                    <Form.Check
                                        type='checkbox'
                                        id="validation"
                                        label={t('check')}
                                        checked={checked}
                                        onChange={()=>setChecked(prevState => !prevState)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-0 col-lg-12">
                                    <Button variant="primary" size={"lg"} disabled={!checked} className="w-100 fw-bold text-uppercase" style={{letterSpacing: '0.085rem'}} type={`${loading ? 'button' : 'submit'}`}>
                                        {loading ? (<Spinner animation="border" size="sm" variant="secondary" />):(t('envoyer'))}
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </ViewContent>

                    <ViewContent time={260} setIsVisible={setVInfo}>
                        <div className={`contact-info h-100 ${vInfo ? 'arrow-div-left' : 'invisible'}`}>
                            <h3 className="contact-info-title">{t('whereAreWe')}</h3>
                            <div className="contact-info-block">
                                <a className="contact-info-row" href="https://maps.google.com/?q=Iavoloha,Antananarivo" target="_blank" rel="noreferrer">
                                    <span className="contact-info-icon"><FaLocationDot size={16}/></span>
                                    <span>
                                        <span className="contact-info-label">{t('whereAreWe')}</span>
                                        <span className="contact-info-value">Iavoloha, Antananarivo 102</span>
                                    </span>
                                </a>
                                <a className="contact-info-row" href="tel:+261381237996">
                                    <span className="contact-info-icon"><FaPhone size={15}/></span>
                                    <span>
                                        <span className="contact-info-label">Téléphone</span>
                                        <span className="contact-info-value">+261 38 12 379 96</span>
                                    </span>
                                </a>
                                <a className="contact-info-row" href="mailto:contact@aris-cc.com">
                                    <span className="contact-info-icon"><FaEnvelope size={15}/></span>
                                    <span>
                                        <span className="contact-info-label">Email</span>
                                        <span className="contact-info-value">contact@aris-cc.com</span>
                                    </span>
                                </a>
                            </div>
                            <div className="contact-hours">
                                <h4 className="contact-hours-title"><FaClock className="me-2" size={15}/>{t('heure')}</h4>
                                <div className="contact-hours-row">
                                    <span>{t('mon')} - {t('ven')}</span>
                                    <strong>{t('h7')} - {t('h17')}</strong>
                                </div>
                                <div className="contact-hours-row">
                                    <span>{t('sat')} - {t('sun')}</span>
                                    <span className="contact-hours-badge">{t('dLine')}</span>
                                </div>
                            </div>
                        </div>
                    </ViewContent>
                </div>

                <div className="contact-map-wrap">
                    <Localisation/>
                </div>
            </section>

            <Toast className={`position-fixed ${erreur ? 'bg-danger' : 'bg-success'} bottom-0 end-0`} show={showToast} onClose={()=>setShowToast(false)} delay={5000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Message</strong>
                    <small>{t('maintenant')}</small>
                </Toast.Header>
                <Toast.Body>
                    {erreur ? `${t('probConnex')}` : `${t('sucMes')}`}
                </Toast.Body>
            </Toast>
        </>
    )
}
export default ContatctContainer
