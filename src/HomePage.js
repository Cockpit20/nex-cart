import React from 'react'
import Header from './Header'
import './Home.css'

function HomePage() {
    return (
        <div>
            <Header />
            <div className='home'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2018/PVLandingPage/Header/1242x450_Mobile-Landing-Page-Header_Web.jpg'
                    alt='banner'
                />
            </div>
        </div>
    )
}

export default HomePage
