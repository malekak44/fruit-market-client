import React from 'react';
import './AddFruit.css';
import { Form, Row, Col } from 'react-bootstrap';

const AddFruit = () => {
    return (
        <div className="addfruit-section">
            <div className="page-title">
                <h4>Add Fruit</h4>
            </div>
            <Form>
                <Row>
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Fruit Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="weight">
                        <Form.Label>Fruit Weight</Form.Label>
                        <Form.Control type="text" placeholder="Enter weight" name="weight" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="price">
                        <Form.Label>Fruit Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter price" name="price" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="photo">
                        <Form.Label>Fruit Photo</Form.Label>
                        <div className="uploadBtn">Upload Photo
                            <Form.Control type="file" name="photo" className="uploadBtn"></Form.Control>
                        </div>
                    </Form.Group>
                </Row>
            </Form>
            <Form.Control type="submit" value="Save" className="saveBtn"></Form.Control>
        </div>
    );
};

export default AddFruit;