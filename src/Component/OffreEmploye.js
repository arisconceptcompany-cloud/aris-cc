import React, {useEffect, useState} from "react";
import PostuleElement from "./PostuleElement";
import {Button, Col, Form, Modal, Row, Spinner} from "react-bootstrap";
import ElementOffre from "../Model/ElementOffre.ts";
import Postule from "../Model/Postule.ts";

const OffreEmploye = () => {
    const [modalShow, setModalShow] = useState(false);
    const [offres,setOffres]=useState([])
    const [load,setLoad]=useState(false)
    const [erreur,setErreur]=useState(false)
    const [elementActive,setElementActive]=useState(null)
    const [loadP,setLoadP]=useState(false)
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [lm, setLm] = useState('');
    const [cv, setCv] = useState(null);
    const infoClicked = (id) => {
        setShowPostule(false)
        setElementActive(()=>offres.find((elem)=>elem.offre.id===id))
        setModalShow(true)
    }
    const [showPostule,setShowPostule]=useState(false)
    const postuleClicked = (id) => {
        setModalShow(false)
        setElementActive(()=>offres.find((elem)=>elem.offre.id===id))
        setShowPostule(true)
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else{
            setLoadP(true)
            const candidat = new Postule(-76, nom, prenom, email, lm, cv);
            Postule.sendCandidat(candidat, elementActive.offre.id).then((res)=>{
                if (res){
                    alert('Candidat envoyé avec succès!');
                    setShowPostule(false)
                }else{
                    alert('Verifier, il y a un problème! Le fichier est trop grand');
                }
            }).catch((er)=>{
                console.log(er)
            }).finally(()=>{
                setNom('')
                setPrenom('')
                setEmail('')
                setLm('')
                setCv(null)
                setLoadP(false)
            });
        }
    };

    useEffect(()=>{
        setLoad(true)
        ElementOffre.getAllOffre().then((resp)=>{
            setOffres(resp)
        }).catch(()=>{
            setErreur(true)
        }).finally(()=>{
            setLoad(false)
        })
    },[])

    return (
        <>
            <div className="row m-0 p-4 w-100">
                <div className="card border-0 pt-3">
                    <div className="row m-0 p-0">
                        {!erreur && load ? (
                            <>
                                <div className="container m-0">
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-12 rounded-2"/>
                                    </div>
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-12 rounded-2"/>
                                    </div>
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-12 rounded-2"/>
                                    </div>
                                </div>
                            </>
                        ):offres.map((lisOffre)=>(
                            <div key={lisOffre.offre.id} className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-3">
                                <PostuleElement postuleClick={()=>postuleClicked(lisOffre.offre.id)} infoClick={()=>infoClicked(lisOffre.offre.id)} domaine={lisOffre.offre.domaine} titre={lisOffre.offre.titre}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                fullscreen={"lg-down"}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="color-aris text-uppercase small">
                        {elementActive?.offre.domaine}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">DESCRIPTION</h4>
                        <p className="fw-bolder">{elementActive?.offre.description}</p>
                    </div>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">Profil recherché</h4>
                        <p className="fw-bolder">{elementActive?.offre.profil}</p>
                    </div>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">Vos missions:</h4>
                        <ul className="list-group list-group-flush">
                            {elementActive?.mission.map((element)=>(
                                <li key={element.id} className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>{element.text}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">COMPÉTENCES TECHNIQUES :</h4>
                        <ul className="list-group list-group-flush">
                            {elementActive?.competence.map((element)=>(
                                <li key={element.id} className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>{element.text}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">QUALITÉS REQUISES :</h4>
                        <ul className="list-group list-group-flush">
                            {elementActive?.qualite.map((element)=>(
                                <li key={element.id} className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>{element.text}</li>
                            ))}
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="row p-0 m-0 w-100">
                        <div className="col-6 p-2">
                            <Button variant="warning" onClick={()=>setModalShow(false)} className="w-100">Fermer</Button>
                        </div>
                        <div className="col-6 p-2">
                            <Button onClick={()=>postuleClicked(elementActive?.offre.id)} className="w-100">Postuler</Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showPostule}
                onHide={() => setShowPostule(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                fullscreen={"lg-down"}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="color-aris text-capitalize">
                        {elementActive?.offre.titre}
                    </Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} autoComplete={"off"} onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Row>
                            <Form.Group className="mb-3" as={Col} lg="6" md="6" sm="12">
                                <Form.Label>Nom *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre nom"
                                    autoFocus
                                    required
                                    value={nom} onChange={(e) => setNom(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} md="6" sm="12">
                                <Form.Label>Prénom *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre prénom"
                                    required
                                    value={prenom} onChange={(e) => setPrenom(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} md="6" sm="12" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Entrez votre email"
                                    required
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} md="6" sm="12" >
                                <Form.Label>CV * </Form.Label>
                                <Form.Control
                                    type="file"
                                    accept=".pdf, .jpg, .jpeg, .png, .gif"
                                    required
                                    onChange={(e) => setCv(e.target.files[0])}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Message * </Form.Label>
                                <Form.Control value={lm} onChange={(e) => setLm(e.target.value)} as="textarea" placeholder="Lettre de motivation" rows={3} required />
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="row p-0 m-0 w-100">
                            <div className="col-6 p-2">
                                <Button onClick={()=>setShowPostule(false)} variant="danger" className="w-100">Annuler</Button>
                            </div>
                            <div className="col-6 p-2">
                                <Button  className="w-100" type={`${loadP ? 'button' : 'submit'}`}>
                                    {loadP ? (<Spinner animation="border" size={"sm"} variant="secondary" />):("Postuler")}
                                </Button>
                            </div>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
export default OffreEmploye