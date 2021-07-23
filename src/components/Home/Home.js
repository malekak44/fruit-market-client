import React from 'react';
import './Home.css';
import Fruit from '../Fruit/Fruit';
import { CardGroup, Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Search from '../Search/Search';

const Home = () => {
    return (
        <>
            <Header />
            <Search />
            <Container id="fruits-container">
                <CardGroup>
                    <Fruit></Fruit>
                </CardGroup>
            </Container>
        </>
    );
};

export default Home;