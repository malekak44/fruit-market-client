import React, { useEffect, useState } from 'react';
import './Home.css';
import Fruit from '../Fruit/Fruit';
import Header from '../Header/Header';
import Search from '../Search/Search';

const Home = () => {
    const url = window.location.href;
    if (!url.includes('login')) {
        document.body.style.backgroundImage = "none";
    }

    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        const url = "http://localhost:4000/fruits";
        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, []);

    return (
        <>
            <Header />
            <Search />
            <div className="container" id="fruits-container">
                <div className="row">
                    {
                        fruits.map(fr => <Fruit key={fr._id} fruit={fr}></Fruit>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;