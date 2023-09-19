import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const amount = useSelector((state) => state.cart.amount)
  return (
    <div>
        <div className="header">
          <Link to='/'>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className='header_log' alt="" />
            </Link>  
            <div className="header_search">
                <input type="text" className='header_input' />
                <SearchIcon className='search_icon' />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className='optionLine_one'>Hello, User</span>
                    <span className='optionLine_two'>Account & List</span>
                </div>
                <div className="header_option">
                  <span className='optionLine_one'>Returns</span>
                  <span className='optionLine_two'> & Order</span>
                </div>
                <div className="header_option">
                  <span className='optionLine_one'>Your</span>
                  <span className='optionLine_two'>Prime</span>
                </div>
                <div className="header_option">
                  <Link to='/cart'>
                    <div className="cart_container">
                    <ShoppingCartIcon className='card_icon' />
                    <span className='cart_counter'>{amount}</span>
                    </div>
                    </Link>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header