import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { HiHandThumbDown } from "react-icons/hi2";
import './../../CSS/Toast.css'

export const Fail = ({ onClose }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <>
            <Modal className='modal fail_modal'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false} >
                <Modal.Header closeButton className='bg-white d-flex align-items-start'>
                    <div className='container-fluid d-flex flex-column align-items-center'>
                        <div>
                            <HiHandThumbDown size={90} className="icon" />
                        </div>
                        <div>
                            <strong className="mx-auto d-block"><h3>Whoops!</h3></strong>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="dark text-white bg-danger d-flex flex-column align-items-center">
                    Don't worry, you'll get it next time! Keep trying!"
                </Modal.Body>
            </Modal>
        </>
    );
}