import React from "react";
import { Modal} from "react-bootstrap";
import Devis from "./Devis";

const ShowModalDevis = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Devis t={props.t} objectTitle={props.title}/>
                </Modal.Body>

            </Modal>
        </>
    )
}
export default ShowModalDevis