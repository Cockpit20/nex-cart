import React from 'react'
import './Header.css'
import { Search, ShoppingBasket } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
                    alt='logo'
                />
            </Link>

            <div className='header__search '>
                <input
                    type='text'
                    className='header__searchInput'
                />
                <Search className='header__searchIcon' />
            </div>

            <div className='headerNav'>
                <Link to='/login' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
                <Link className='header__link' to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasket />
                        <span className='header__optionLineTwo header__basketCount'>0</span>
                    </div>
                </Link>
            </div>



        </nav>
    )
}

export default Header
