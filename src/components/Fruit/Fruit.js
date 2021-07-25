import React from 'react';
import './Fruit.css';

const Fruit = ({ fruit }) => {
    const { name, imageURL, price, weight } = fruit;
    return (
        <div className="col">
            <div className="card" style={{ width: "17rem" }}>
                <img className="card-img-top" src={imageURL} alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-center">{name} - {weight}</h5>
                    <span className="card-text">${price}</span>
                    <button className="buyBtn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Fruit;