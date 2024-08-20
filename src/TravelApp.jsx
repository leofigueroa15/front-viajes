import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Carousel from './components/Carousel'
import Information from './components/Information'
import Favorites from './components/Favorites'

const TravelApp = () => {
    return (
        <>
            <Header />
            <main>
                <Search />
                <Carousel />
                <Information />
                <Favorites />
            </main>
            <Footer />
        </>
    )
}

export default TravelApp
