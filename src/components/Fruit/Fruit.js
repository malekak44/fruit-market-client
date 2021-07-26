import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Fruit.css';

const Fruit = ({ fruit }) => {
    const { name, imageURL, price, weight } = fruit;
    const [signedInUser] = useContext(UserContext);

    const handleOrder = () => {
        const orderData = {
            description: name + " - " + weight,
            price: price
        }

        const newOrder = { ...signedInUser, ...orderData };
        fetch("http://localhost:4000/addOrder", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className="col">
            <div className="card" style={{ width: "17rem" }}>
                <img className="card-img-top" src={imageURL} alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-center">{name} - {weight}</h5>
                    <span className="card-text">${price}</span>
                    <Link to="orders" style={{ textDecoration: "none" }}>
                        <button onClick={handleOrder} className="buyBtn">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Fruit;