import React from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'

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
                <div className='home__row'>
                    <Product
                        id='12321341'
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k_RvjwEkpM6BUfU7jENXsqHxWU5SmaB4zA&s"
                    />
                    <Product
                        id='12321341'
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k_RvjwEkpM6BUfU7jENXsqHxWU5SmaB4zA&s"
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='12321341'
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k_RvjwEkpM6BUfU7jENXsqHxWU5SmaB4zA&s"
                    />
                    <Product
                        id='12321341'
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k_RvjwEkpM6BUfU7jENXsqHxWU5SmaB4zA&s"
                    />
                    <Product
                        id='12321341'
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k_RvjwEkpM6BUfU7jENXsqHxWU5SmaB4zA&s"
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='12321341'
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k_RvjwEkpM6BUfU7jENXsqHxWU5SmaB4zA&s"
                    />
                </div>

            </div>
        </div>
    )
}

export default HomePage
