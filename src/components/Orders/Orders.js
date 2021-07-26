import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Order.css';

const Orders = () => {
    const url = window.location.href;
    if (!url.includes('login')) {
        document.body.style.backgroundImage = "none";
    }

    const [orders, setOrders] = useState([]);
    const [signedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:4000/orders?email=" + signedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [signedInUser.email]);

    const total = orders.reduce((total, order) => total + Number(order.price), 0).toFixed(2);

    return (
        <>
            <Header />
            <div className="order-details">
                <h3>Checkout</h3>
                <div id="order-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr key={order._id}>
                                    <td>{order.description}</td>
                                    <td>1</td>
                                    <td>${Number(order.price).toFixed(2)}</td>
                                </tr>)
                            }
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>
                                    ${total}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="submit" id="checkoutBtn">Checkout</button>
            </div>
        </>
    );
};

export default Orders;