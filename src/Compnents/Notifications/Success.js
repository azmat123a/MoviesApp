import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { HiHandThumbUp } from "react-icons/hi2";
import './../../CSS/Toast.css'

export const Success = ({ onClose }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <>
            <Modal className='modal'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false} >
                <Modal.Header closeButton className='bg-white d-flex align-items-start'>
                    <div className='container-fluid d-flex flex-column align-items-center'>
                        <div>
                            <HiHandThumbUp size={90} className="icon" />
                        </div>
                        <div>
                            <strong className="mx-auto d-block"><h3>Yoo!</h3></strong>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="dark text-white bg-success d-flex flex-column align-items-center">
                    Congratulations! Your sequence is correct.
                </Modal.Body>
            </Modal>
        </>
    );
}