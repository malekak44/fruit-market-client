import React, { useEffect, useState } from 'react';
import './ManageFruit.css';
import editIcon from '../../icons/gedit.png';
import trushIcon from '../../icons/trush.png';

const ManageFruit = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        const url = "http://localhost:4000/fruits";
        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    const deleteFruit = (id) => {
        const deleteUrl = `http://localhost:4000/deleteFruit/${id}`;
        fetch(deleteUrl, {
            method: 'DELETE'
        })
            .then(res => console.log(res))
    }

    return (
        <div>
            <div className="page-title">
                <h4>Manage Fruits</h4>
            </div>
            <div id="manageTable">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Fruit Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fruits.map(fr => <tr key={fr._id}>
                                <td>{fr.name}</td>
                                <td>{fr.weight}</td>
                                <td>${fr.price}</td>
                                <td>
                                    <img src={editIcon} alt="edit" />
                                    <img onClick={() => deleteFruit(`'${fr._id}'`)} style={{ marginLeft: "7px" }} src={trushIcon} alt="trush" />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageFruit;