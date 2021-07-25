import React from 'react';
import './Fruit.css';
import { Card } from 'react-bootstrap';
import coconut from '../../icons/coconut.jpg';

const Fruit = () => {
    return (
        <>
            <Card>
                <div className="image-container">
                    <Card.Img variant="top" src={coconut} alt="fruit" />
                </div>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <div className="card-details">
                        <h4>$367</h4>
                        <button>Buy Now</button>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <div className="image-container">
                    <Card.Img variant="top" src={coconut} alt="fruit" />
                </div>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <div className="card-details">
                        <h4>$367</h4>
                        <button>Buy Now</button>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <div className="image-container">
                    <Card.Img variant="top" src={coconut} alt="fruit" />
                </div>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <div className="card-details">
                        <h4>$367</h4>
                        <button>Buy Now</button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default Fruit;