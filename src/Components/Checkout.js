import React from 'react'
import Header from './Header'
import './Checkout.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div>
            <Header />
            <div className='checkout'>
                <div className='checkout__left'>
                    <img
                        className='checkout__ad'
                        src='https://m.media-amazon.com/images/G/32/em/pd22/Onsite/associates/0073_PD22_LU_Associates_01_2148x588.jpg'
                    />
                    {basket?.length === 0 ? (
                        <div>
                            <h2>Your shopping basket is empty</h2>
                            <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='checkout__title'>
                                Your Shopping Basket
                            </h2>
                            {basket.map((item) => {
                                return <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            })}
                        </div>
                    )}
                </div>
                {basket.length > 0 && (
                    <div className='checkout__right'>
                        <SubTotal />
                    </div>
                )}

            </div>

        </div>
    )
}

export default Checkout
