import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../../store/slices/cart/cartSlice';
import "./style.css"
import { MEDIA_LINK } from '../../const/const';
import Invoice from './component/Invoice';

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.cartItems)
  console.log(cartItems);
  const dispatch = useDispatch();
  if (cartItems.length === 0) return <div className='empty-cart'>Your cart is Empty</div>
  // window.scrollTo(0,0)
  return (
    <div className='cart-page'>
      <div className="cart-items-list">
        {
          cartItems?.map((cartItem) => <div key={cartItem.key} className='cart-item'>
            <div className="cart-item-box">
              <div className="cart-item-box-left">
                <div className='item-name'>{cartItem.name}</div>
                <div className="dish-price">
                  <span className="actual-price">&#8377;{cartItem.price}</span>
                </div>
                <div className="dish-desc">
                  {cartItem.description}
                </div>
              </div>

              <div className="cart-item-box-right">
                {cartItem.imageId && <img loading='lazy' className='item-image' src={MEDIA_LINK + cartItem.imageId} alt="" />}
                <button
                  onClick={() => dispatch(removeItem(cartItem))}
                  className='remove-item-btn'>
                  Remove
                </button>
              </div>
            </div>

          </div>

          )
        }
      </div>
      
      <Invoice/>
    </div>
  )
}
