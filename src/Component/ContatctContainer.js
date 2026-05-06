import React, { useMemo, useState} from "react";
import {Button, Form, Spinner, Toast} from "react-bootstrap";
import Localisation from "./Contact/Localisation";
import {useMediaQuery} from "react-responsive";
import {FormInput, FormSelect, FormTextarea} from "./Contact/FormInput";
import ViewContent from "../FunctionComponent/ViewContent";
import {useTranslation} from "react-i18next";

const ContatctContainer = () => {
    const {t,i18n} = useTranslation()
    const elementOption=useMemo(()=>[
        {id:1, name: t('info')},
        {id:2 , name: t('rh')},
        {id:3 , name: t('ext')},
        {id:4 , name: t('marketing')},
        {id:5 , name: t('compta')},
        {id:6 , name: t('other')},
    ] ,[i18n.language])

    const [selectedOption,setSelected]=useState('')
    const handleChange = (event) => {
        const selectedId = event.target.value;
        const selectedOptionObj = elementOption.find(option => option.id === parseInt(selectedId,1));
        const selectedName = selectedOptionObj ? selectedOptionObj.name : '';
        setSelected(selectedName);
    };

    const[erreur,setErreur]=useState(false)
    const [showToast,setShowToast]=useState(false)
    const [loading,setLoading]=useState(false)
    const [validated, setValidated] = useState(false);


    const [checked,setChecked]=useState(false)
    const minWidth=useMediaQuery({query: "(max-width:1000px)"})
    const col12=useMediaQuery({query: "(max-width: 768px)"})
    const heig= useMemo(() => {
        return minWidth ? 'auto' : 'calc(100% - 70px)'
    }, [minWidth]);
    const [isVisible, setIsVisible] = useState(false)
    const [vInfo, setVInfo] = useState(false);
    return(
        <>
            <div className="row w-100 my-3 mx-0 p-0">
                <div className="card border-0">
                    <div id="map" className={`row m-0 ${minWidth ? 'p-0' : 'p-2'}`}>
                        <div className={`${minWidth ? 'col-12 p-0 m-0' : 'col-7'} align-items-stretch`}>
                           <ViewContent time={250} setIsVisible={setIsVisible}>
                               <div className={`card p-0 h-100 border-0 w-100 shadow ${isVisible ? 'showTop-70' : 'opacity-0'}`} style={{transform: col12 ? 'translateY(-30px)' : 'translateY(-70px)'}}>
                                   <div className="card-body">
                                       <div className="mb-3 px-0 pt-1 pb-2 mx-3 text-center border-bottom border-2 border-primary">
                                           <span className="display-6 text-concept">{t('formulaireT')}</span>
                                       </div>
                                       <Form noValidate validated={validated} className="row" onSubmit={(e)=>null} autoComplete={"off"}>
                                           <Form.Group as={"div"} className={`mt-2 mb-2 col-lg-6 col-md-12`}>
                                               <FormInput id="entreprise" placeholder={t('formEnt')} label={t('company')} />
                                           </Form.Group>
                                           <Form.Group as={"div"} className={`mt-2 mb-2 col-lg-6 col-md-12`}>
                                               <FormInput id="site" placeholder={"www.company.com"} label={t('siteCompany')} />
                                           </Form.Group>
                                           <Form.Group as={"div"} className="mt-2 mb-2 col-lg-6 col-md-12">
                                               <FormInput id="nom" placeholder={t('enterName')} label={t('nom')} />
                                           </Form.Group>
                                           <Form.Group as={"div"} className="mb-3 mt-2 col-lg-6 col-md-12">
                                               <FormInput type={"email"} id={"mail"} label={t('emailEnter')} placeholder={"Email"}/>
                                           </Form.Group>
                                           <Form.Group as={"div"} className="mt-2 mb-3 col-lg-12">
                                               <FormSelect id={'besoin'} label={'Service'} onChange={(e)=>handleChange(e)}>
                                                   {elementOption.map(({id,name})=>(
                                                       <option className="p-4" key={id} value={id} >{name}</option>
                                                   ))}
                                               </FormSelect>
                                           </Form.Group>
                                           <Form.Group as={"div"} className="mb-3 mt-2 col-lg-12">
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
                                           <Form.Group className="mb-3 col-lg-12" >
                                               <Button variant="primary" size={"lg"} disabled={!checked} className="w-100 btn-content fw-bold text-uppercase" style={{letterSpacing: '0.085rem'}} type={`${loading ? 'button' : 'submit'}`}>
                                                   {loading ? (<Spinner animation="border" size="sm" variant="secondary" />):(t('envoyer'))}
                                               </Button>
                                           </Form.Group>
                                       </Form>
                                   </div>
                               </div>
                           </ViewContent>
                        </div>
                        <div className={`${minWidth ? 'col-12 p-0 mx-0 mb-3' : 'col-5'} d-flex align-items-stretch mb-0`}>
                            <ViewContent time={200} setIsVisible={setVInfo} className={`card border-0 shadow-lg mx-auto w-100 z-0 ${vInfo ? 'arrow-div-left' : 'invisible'}`} style={{height: heig}}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                    <h4 className="color-dark-concept fw-bold section-title pt-2">{t('whereAreWe')}</h4>
                                    <div className="mb-1">
                                    <pre className="m-0 fs-5 text-danger">
                                        <i className="fa fa-location-dot"/><strong> Iavoloha, Antananarivo 102</strong>
                                    </pre>
                                    </div>
                                    <div className="mb-1">
                                    <pre className="m-0 fs-5 text-tel">
                                        <i className="fa fa-phone"/><strong> +261 38 12 379 96</strong>
                                    </pre>
                                    </div>
                                    <div className="mb-1">
                                    <pre className="m-0 fs-5 text-linkdein">
                                        <i className="fa fa-envelope"/><strong> contact@aris-cc.com</strong>
                                    </pre>
                                    </div>
                                    <h4 className="color-dark-concept fw-bold mt-3 section-title" >{t('heure')}</h4>
                                    <div>
                                        <pre className="m-0 fs-5">{t('mon')}<i className="mx-2 fa fa-minus"/>{t('ven')} : <strong>{t('h7')}</strong><i className="mx-2 fa fa-minus"/><strong>{t('h17')}</strong></pre>
                                    </div>
                                    <div>
                                        <pre className="m-0 fs-5">{t('sat')}<i className="mx-2 fa fa-minus"/>{t('sun')} : {t('dLine')}</pre>
                                    </div>
                                </div>
                            </ViewContent>
                        </div>
                        <div className={`col-12 p-0 mx-0 d-flex align-items-stretch mb-2`}>
                            <div className="card border-0 mx-auto w-100 z-0" style={{height: '500px'}}>
                                <div className="card-body shadow-lg w-100 m-0 p-0">
                                    <Localisation/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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