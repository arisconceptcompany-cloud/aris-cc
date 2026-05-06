import React, {useCallback, useState} from 'react'
import {Button, Form, Spinner, Toast} from "react-bootstrap";
import Newsletter from "../Model/Newsletter.ts";
import IconFooter from "./Footer/IconFooter";

const Footer = () => {
    const [nom,setNom]=useState('')
    const [mail,setMail]=useState('')
    const [showToast,setShowToast]=useState(false)
    const [erreur,setErreur]=useState(false)
    const [loading,setLoading]=useState(false)

    const [validated, setValidated] = useState(false);
    const sendNewsletter = (event) => {
        setLoading(true)
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false ) {
            event.stopPropagation();
            setValidated(true);
            setLoading(false)
        } else{
            setLoading(true)
            Newsletter.sendDataToAdmin(nom,mail).then((res)=>{
                setErreur(!res)
                setShowToast(true)

            }).catch(()=>{
                setErreur(true)
                setShowToast(true)
            }).finally(()=>{
                setValidated(false);
                setLoading(false)
                setNom('')
                setMail('')
            })
        }
    }

    const handleClick = useCallback((e) => {
        e.preventDefault();
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${'contact@aris-cc.com'}`;
        window.open(mailtoUrl, '_blank');
    },[])
    return (
        <>
            <IconFooter/>
            {/*<div className="row mx-0 mt-4 mb-0 py-0 px-2 w-100 bg-dark-blue">*/}
            <div className="row mx-0 mt-4 mb-0 py-0 px-2 w-100" style={{
                // backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="row p-0 mt-3 mb-0 mx-0">
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 p-0 text-white" >
                    {/*<div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 p-0 text-white" style={{transform: 'translateY(-50px)'}}>*/}
                        {/*<div className="m-0 p-3 w-100 h-auto bg-mi-blue rounded-3">*/}
                        <div className="my-0 p-2 ms-3 me-0 w-100 h-auto rounded-3">
                            <h2 className="">Contactez-nous</h2>
                            <ul className="list-inline d-md-block d-sm-flex align-items-sm-center flex-sm-column mb-0">
                                <li className="list-inline-item p-2 rounded-2 d-flex align-items-stretch cursor-pointer" style={{ height: '50px' }}>
                                    <div className="h-100 d-flex align-items-center flex-shrink-0">
                                        <i className="fa-solid fa-location-dot fa-2x"/>
                                    </div>
                                    <div className="h-100 d-flex align-items-center flex-grow-1">
                                        <span className="ms-2">Iavoloha, Antananarivo 102</span>
                                    </div>
                                </li>
                                <li className="list-inline-item p-2 rounded-2 d-flex align-items-stretch cursor-pointer" style={{ height: '50px' }}>
                                    <div className="h-100 d-flex align-items-center flex-shrink-0" style={{height: '100%'}}>
                                        <i className="fa-solid fa-phone fa-2x"/>
                                    </div>
                                    <div className="h-100 d-flex align-items-center flex-grow-1">
                                        <a  href="https://wa.me/+261385340534" target="_blank" rel="noopener noreferrer" className="ms-2 email-link">+261 38 53 405 34</a>
                                    </div>
                                </li>
                                <li className="list-inline-item p-2 rounded-2 d-flex align-items-stretch cursor-pointer" style={{ height: '50px' }}>
                                    <div className="h-100 d-flex align-items-center flex-shrink-0 ">
                                        <i className="fa-solid fa-envelope fa-2x"/>
                                    </div>
                                    <div className="h-100 d-flex align-items-center flex-grow-1">
                                        <a  href={`mailto:${'contact@aris-cc.com'}`} onClick={handleClick} className="ms-2 email-link">contact@aris-cc.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                        <div className="container text-white">
                            <div className="row m-0 p-0 d-flex align-items-center">
                                <h2 className="ms-2 p-2">
                                    Newsletter
                                </h2>
                                <div className="row m-0 p-0">
                                    <div className="col-12 p-2" >
                                        Inscrivez-vous à notre newsletter et recevez par email les dernières tendances du digital.
                                    </div>
                                    <div className="col-lg-7 col-md-10 offset-md-1 col-sm-12">
                                        <Form noValidate validated={validated} autoComplete={"off"} onSubmit={(event)=>sendNewsletter(event)}>
                                            <Form.Group className="mt-1 mb-2" controlId="nom">
                                                <Form.Label>Nom *</Form.Label>
                                                <Form.Control required type="text" value={nom} onChange={(event)=>setNom(event.target.value)} placeholder="Enter votre nom" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="mail">
                                                <Form.Label>Email *</Form.Label>
                                                <Form.Control required type="email" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="Entrer votre email" />
                                            </Form.Group>

                                            <Button variant="info" className="w-100" type={`${loading ? 'button' : 'submit'}`}>
                                                {loading ? (<Spinner animation="border" size={"sm"} variant="secondary" />):("Valider")}
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="text-center m-0 p-0">
                    <hr className="border-dark-subtle w-100"/>
                </div>
                <div className="m-0 p-0 w-100">
                    <div className="float-start text-light d-inline-flex">
                        <span className="pb-1">© 2024 Aris Concept company</span>
                    </div>
                    <div className="float-end text-light pb-1">
                        <span> Tous droits réservés.</span>
                    </div>
                </div>
            </div>
            <Toast className={`position-fixed ${erreur ? 'bg-danger' : 'bg-success'} bottom-0 end-0`} show={showToast} onClose={()=>setShowToast(false)} delay={5000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Message</strong>
                    <small>Maintenant</small>
                </Toast.Header>
                <Toast.Body>
                    {erreur ? ('Il y a un problème de connexion') : ('Votre information a été envoyée avec succès')}
                </Toast.Body>
            </Toast>
        </>
    )
}
export default Footer