import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../App/feacture/cartSlice'
import './Product.css'

const Projuct = ({title, img, price, rating, id, amount}) => {
  const dispatch = useDispatch()
  const [submited, setSubmited] = useState("");
  return (
    <div className='product'>
        <p className='product_title'>{title}</p>
        <div className='img_div'>
        <img className='product_img' src={img} alt="" />
        </div><div className='rating'>
        <p>⭐</p>   
        <p>⭐</p>   
        <p>⭐</p>   
        <p>⭐</p>   
        <p>⭐</p>  
        <p>{rating}</p> 
        </div>
        <p className='product_price'>${price}</p>
        <p className='shipping_price'>$300 shipping</p>
        <button className='add_to_cart_btn' 
        onClick={() => {dispatch(addToCart({title, img, price, id, amount})); setSubmited("Added to Cart ✔");}}
        > Add TO Cart</button><p style={{fontSize:"10px", color: "green", marginTop: "3px",marginLeft: '5px'}}>{submited}</p>
        
    </div>
  )
}

export default Projuct