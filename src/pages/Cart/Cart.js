import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../App/feacture/cartSlice'
import './Cart.css'
import CartItems from './CartItems'

const Cart = () => {

  const {ArrayItems,total,amount} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <div className='cart'>
        <img src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg" className='cart_hero_img' alt="" />
        <div className='cart_data'>
        <h1>Your Shopping Basket</h1>
            <div className='cart_row'>
                <div className='cart_items'>
                    <h2>Cart items</h2>
                    <div className='line'></div>
                    {ArrayItems.map((state) =>  <CartItems data={state} key={state.id} /> )}
                   <div className='clear_cart'>
                    {amount === 0 ? <p>Your Cart Is Empty</p>: 
                    <button className='clear_cart_btn' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                  }
                    </div>
                    </div>
  
                <div className='check_out'>
                  <h2>CheckOut</h2>
                     <div className='check_out_inner'>
                      <h2>Number Of items: <span>{amount}</span></h2>
                      <h2>Total: <span>${total}</span></h2>
                      <button className='checkout_btn'>CheckOut</button>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart