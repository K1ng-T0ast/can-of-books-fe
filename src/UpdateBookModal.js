import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'

class UpdateBook extends React.Component {

    handleBookUpdate = (event) => {
        event.preventDefault();

        let bookUpdate = {
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.checked,
            _id: this.props.book._id,
            __v: this.props.book.__v
        }
        console.log('Book update', bookUpdate);
        this.props.updateBook(bookUpdate);
        this.props.onHide();
    };


    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.book ? (
                            <Form onSubmit={this.handleBookUpdate}>
                                <Form.Group controlId='title'>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type='text' defaultValue={this.props.book.title} required></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='description'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as='textarea' defaultValue={this.props.book.description} rows={5} required></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='status'>
                                    <Form.Check type='checkbox' defaultChecked={this.props.book.status} label='Highly Recommended Read'></Form.Check>
                                </Form.Group>
                                <Button variant='primary' type='submit'>Update Book</Button>
                            </Form>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UpdateBook;