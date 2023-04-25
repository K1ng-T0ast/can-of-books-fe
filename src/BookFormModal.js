import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

class BookModal extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.onSubmit}>
                            <Form.Group controlId='title'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type='text' placeholder='Enter Book Title' required></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type='textarea' rows={3} required></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='status'>
                                <Form.Check type='checkbox' label='Highly Recommended'></Form.Check>
                            </Form.Group>
                            <Button variant='primary' type='submit'></Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default BookModal;