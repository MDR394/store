import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseItem, increseItem, removeFromCart } from '../../App/feacture/cartSlice'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import './Cart.css'

const CartItems = (props) => {
    const {title, price, id, img, amount} = props.data
    const dispatch = useDispatch()
    
  return (
    <div>
         <div className='cart_item'>
                      <img src={img} alt="" />
                     <div className='cart_item_h2'>
                     <h2>{title}</h2>
                     </div> 
                      <p>${price}</p>
                      <div className='Up_Down_arrows'>
                        <IoIosArrowUp onClick={() => dispatch(increseItem({id}))} className='arrows'/>
                        <p>{amount}</p>
                        <IoIosArrowDown onClick={() => amount < 2 ? dispatch(removeFromCart(id)) :dispatch(decreaseItem({id}))} className='arrows' />
                      </div>
                      <button onClick={() => dispatch(removeFromCart(id))}>Remove</button>
                    </div>
         </div>
  )
}

export default CartItems