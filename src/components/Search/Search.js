import React from 'react';
import './Search.css';
import { Form, Row, Col } from 'react-bootstrap';

const Search = () => {
    return (
        <Form id="search-form">
            <Row>
                <Col xs={9}>
                    <Form.Control placeholder="Search Fruit Here" />
                </Col>
                <Col>
                    <button type="submit" id="searchBtn">Search</button>
                </Col>
            </Row>
        </Form>
    );
};

export default Search;