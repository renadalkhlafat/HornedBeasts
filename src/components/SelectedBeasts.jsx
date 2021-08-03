import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeasts extends Component {
    render() {
        const { title, image_url, description, onClose, show } = this.props;
        return (
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={image_url}
                        alt={title}
                        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                    />
                </Modal.Body>
                <Modal.Footer className='justify-content-center' >{description}</Modal.Footer>
            </Modal>
        );
    }
}

export default SelectedBeasts;