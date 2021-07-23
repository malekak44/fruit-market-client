import React from 'react';
import './Fruit.css';
import { Card } from 'react-bootstrap';

const Fruit = () => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/59/65/69/596569f3fcb2b6d1ba8c5cdd43223003.jpg" alt="fruit" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <div className="card-details">
                        <h4>$367</h4>
                        <button>Buy Now</button>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/59/65/69/596569f3fcb2b6d1ba8c5cdd43223003.jpg" alt="fruit" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <div className="card-details">
                        <h4>$367</h4>
                        <button>Buy Now</button>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/59/65/69/596569f3fcb2b6d1ba8c5cdd43223003.jpg" alt="fruit" />
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