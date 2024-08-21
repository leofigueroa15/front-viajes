import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import CarouselCard from './components/CarouselCard'
import Information from './components/Information'
import Favorites from './components/Favorites'
import Container from 'react-bootstrap/Container';

const TravelApp = () => {
    return (
        <>
            <Container fluid>
                <Header />
                <Search />
                <CarouselCard />
                <Information />
                <Favorites />
                <Footer />
            </Container>
        </>
    )
}

export default TravelApp
