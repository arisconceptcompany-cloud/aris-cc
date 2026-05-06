import React, {useCallback, useState} from "react";
import {Button, Form, Spinner} from "react-bootstrap";

const Devis = ({objectTitle,t}) => {
    const [loading] = useState(false);
    const [phoneNumber,setPhoneNumber]=useState('+ ')
    const inputPhone=useCallback(
        (e) => {
            const numericValue = e.replace(/\D/g, "");
            let formattedPhone = numericValue;
            if (numericValue.length > 3 && numericValue.length <= 6) {
                formattedPhone = `${numericValue.slice(0, 3)} ${numericValue.slice(3)}`;
            } else if (numericValue.length > 6) {
                formattedPhone = `${numericValue.slice(0, 3)} ${numericValue.slice(3, 6)} ${numericValue.slice(6)}`;
            }
            setPhoneNumber(`+ ${formattedPhone}`)
        },
        [],
    );

    return(
        <>
            <div className="card w-100 p-0 m-0">
                <div className="card-body border-0 p-0 m-0">
                    <div className="p-2">
                        <h5 className="text-center mt-3 display-6 text-concept">
                            {t('demandeDevis')}
                        </h5>
                    </div>
                    <Form noValidate className="row p-0 m-0" autoComplete={"off"}>
                        <Form.Group className="mt-1 mb-2 col-lg-12 col-md-12" controlId="entreprise">
                            <Form.Label className="fw-bold fs-5">{t('entreprise')} *</Form.Label>
                            <Form.Control required type="text"
                                // value={nom} onChange={(e)=>setNom(e.target.value)}
                                          placeholder={t('companyName')} />
                        </Form.Group>
                        <Form.Group className="mt-1 mb-2 col-lg-12 col-md-12" controlId="nom">
                            <Form.Label className="fw-bold fs-5">{t('nom')} *</Form.Label>
                            <Form.Control required type="text"
                                // value={nom} onChange={(e)=>setNom(e.target.value)}
                                          placeholder={t('enterName')} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12 col-md-12" controlId="mail">
                            <Form.Label className="fw-bold fs-5">Email *</Form.Label>
                            <Form.Control required type="email"
                                // value={mail} onChange={(e)=>setMail(e.target.value)}
                                          placeholder={t('emailEnter')} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                            <Form.Label className="fw-bold fs-5">{t('phone')} *</Form.Label>
                            <Form.Control required type="text"
                                value={phoneNumber} onChange={(e)=>inputPhone(e.target.value)}
                                          placeholder={t('yourTel')} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="description">
                            <Form.Label className="fw-bold fs-5">{t('desc')} *</Form.Label>
                            <Form.Control required as="textarea"
                                // value={comment} onChange={(e)=>setComment(e.target.value)}
                                          aria-rowspan={3}
                                          placeholder={t('bes')} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" >
                            <Button variant="primary" className="w-100 btn-content text-uppercase fw-bold espacement" type={`${loading ? 'button' : 'submit'}`}>
                                {loading ? (<Spinner animation="border" size="sm" variant="light" />):(t('envoyer'))}
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Devis