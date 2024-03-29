import React from 'react'
import { useSelector } from 'react-redux'
import "./style.css"
import { getCartTotal } from '../../store/slices/cart/common';
import { Link } from 'react-router-dom';


export default function CartInfoBar() {
    const cart = useSelector((store)=>store.cart)
    const cartItems = cart.cartItems
    const totalAmount = cart.cartTotal
    
    if(cartItems.length===0)return;
    

  return (
    <div className='Cart-info-bar'>
      <div className="Cart-info-bar-box">
        <div className="Cart-info-bar-box-left">
          <span className="total-items">{cartItems.length} Items Added</span>
          </div>
        <Link to={"/cart"} className="Cart-info-bar-box-right">View Cart</Link>
      </div>
    </div>
  )
}
